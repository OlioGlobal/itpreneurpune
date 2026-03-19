export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { mobileNumber, customerId } = req.body;

  if (!mobileNumber) {
    return res.status(400).json({
      success: false,
      message: "Mobile number is required",
    });
  }

  // Validate Indian mobile number
  if (!/^[6-9]\d{9}$/.test(mobileNumber)) {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid Indian mobile number",
    });
  }

  try {
    console.log("[send-otp] ENV check - AUTH_TOKEN set:", !!process.env.MESSAGE_CENTRAL_AUTH_TOKEN);
    console.log("[send-otp] ENV check - CUSTOMER_ID:", process.env.MESSAGE_CENTRAL_CUSTOMER_ID || "NOT SET");
    console.log("[send-otp] Request body:", { mobileNumber, customerId });

    // Build URL with query parameters (this is the correct format)
    const sendOtpUrl = `https://cpaas.messagecentral.com/verification/v3/send?countryCode=91&customerId=${
      customerId || process.env.MESSAGE_CENTRAL_CUSTOMER_ID
    }&flowType=SMS&mobileNumber=${mobileNumber}`;

    console.log("[send-otp] Calling Message Central API...");

    const otpResponse = await fetch(sendOtpUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authToken: process.env.MESSAGE_CENTRAL_AUTH_TOKEN,
      },
    });

    console.log("[send-otp] Response status:", otpResponse.status, otpResponse.statusText);

    // Check if response is ok first
    if (!otpResponse.ok) {
      const errorBody = await otpResponse.text();
      console.error(
        "Message Central API Error:",
        otpResponse.status,
        otpResponse.statusText,
        "Body:", errorBody
      );
      throw new Error(
        `Message Central API returned ${otpResponse.status}: ${otpResponse.statusText}`
      );
    }

    // Get response text first to debug
    const responseText = await otpResponse.text();

    // Try to parse JSON
    let data;
    try {
      data = JSON.parse(responseText);
    } catch (parseError) {
      console.error("JSON Parse Error:", parseError);
      console.error("Response was:", responseText);
      throw new Error("Invalid response format from Message Central API");
    }

    if (data.responseCode === 200 && data.data && data.data.verificationId) {
      res.status(200).json({
        success: true,
        verificationId: data.data.verificationId,
        message: "OTP sent successfully",
        mobileNumber: mobileNumber,
      });
    } else {
      res.status(400).json({
        success: false,
        message: data.message || "Failed to send OTP. Please try again.",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
}
