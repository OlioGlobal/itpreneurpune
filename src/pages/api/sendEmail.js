import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, mobile, city, pageSource, fullUrl } = req.body;

  if (!name || !email || !mobile) {
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
    // 1️⃣ Send Email
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `iTpreneur <${process.env.EMAIL_USER}>`,
      to: "olioclientwebsiteleads@gmail.com",
      subject: "📣 Enquiry from iTPreneur Pune",
      text: `Name: ${name}
Email: ${email}
Mobile: ${mobile}
City: ${city}
Page Source: ${pageSource}
`,
    });

    // 2️⃣ Send to Google Sheet
    await fetch(process.env.GS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        mobile,
        city,
        pageName: pageSource,
        fullUrl,
      }),
    });

    // 3️⃣ Try sending to NoPaperForms (ignore errors silently)
    try {
      const npfResponse = await fetch(
        "https://api.nopaperforms.io/lead/v1/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "secret-key": process.env.NPF_SECRET_KEY,
            "access-key": process.env.NPF_ACCESS_KEY,
          },
          body: JSON.stringify({
            name,
            email,
            mobile,
            city,
            state: "Maharashtra",
            source: "google",
          }),
        }
      );

      if (!npfResponse.ok) {
        const errorText = await npfResponse.text();
        console.error("NPF API Error:", npfResponse.status, errorText);
      } else {
        const npfData = await npfResponse.json();
        console.log("NPF Success:", npfData);
      }
    } catch (npfError) {
      console.error("NPF connection error:", npfError);
    }

    // ✅ Final response (always same to frontend)
    res.status(200).json({
      message: "Lead sent to Email and Google Sheet!",
    });
  } catch (error) {
    console.error("Handler error:", error);
    res.status(500).json({ message: "Something went wrong!" });
  }
}
