export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { verificationId, otp, mobileNumber, customerId } = req.body;

  if (!verificationId || !otp || !mobileNumber) {
    return res.status(400).json({
      success: false,
      message: "Verification ID, OTP, and mobile number are required",
    });
  }

  // Validate OTP format
  if (!/^\d{4}$/.test(otp)) {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid 4-digit OTP",
    });
  }

  try {
    const validateUrl = `https://cpaas.messagecentral.com/verification/v3/validateOtp?countryCode=91&mobileNumber=${mobileNumber}&verificationId=${verificationId}&customerId=${
      customerId || process.env.MESSAGE_CENTRAL_CUSTOMER_ID
    }&code=${otp}`;

    const validateResponse = await fetch(validateUrl, {
      method: "GET",
      headers: {
        authToken: process.env.MESSAGE_CENTRAL_AUTH_TOKEN,
      },
    });

    const data = await validateResponse.json();

    if (
      data.responseCode === 200 &&
      data.data &&
      data.data.verificationStatus === "VERIFICATION_COMPLETED"
    ) {
      res.status(200).json({
        success: true,
        message: "OTP verified successfully",
        mobileNumber: mobileNumber,
        verificationStatus: data.data.verificationStatus,
      });
    } else if (
      data.responseCode === 200 &&
      data.data &&
      data.data.verificationStatus === "VERIFICATION_FAILED"
    ) {
      res.status(400).json({
        success: false,
        message: "Invalid OTP. Please try again.",
      });
    } else if (
      data.responseCode === 200 &&
      data.data &&
      data.data.verificationStatus === "VERIFICATION_EXPIRED"
    ) {
      res.status(400).json({
        success: false,
        message: "OTP has expired. Please request a new one.",
      });
    } else {
      console.error("OTP Validation Failed:", data);
      res.status(400).json({
        success: false,
        message: data.message || "OTP verification failed. Please try again.",
      });
    }
  } catch (error) {
    console.error("OTP Validation Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
}
