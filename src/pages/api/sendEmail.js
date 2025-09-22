import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, mobile, city, education, pageSource, fullUrl, source } =
    req.body;

  if (!name || !email || !mobile) {
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
    // 1️⃣ Send Email
    // const transporter = nodemailer.createTransport({
    //   host: "smtp.gmail.com",
    //   port: 465,
    //   secure: true,
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS,
    //   },
    // });

    // await transporter.sendMail({
    //   from: `iTpreneur <${process.env.EMAIL_USER}>`,
    //   to: "olioclientwebsiteleads@gmail.com",
    //   subject: "📣 Enquiry from iTPreneur Pune",
    //   text: `Name: ${name}
    //   Email: ${email}
    //   Mobile: ${mobile}
    //   City: ${city}
    //   Education: ${education}
    //   Page Source: ${pageSource}
    //   Traffic Source: ${source}
    //   Full URL: ${fullUrl}
    //   `,
    // });

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
        education,
        pageName: pageSource,
        fullUrl,
      }),
    });

    // 3️⃣ Send to NoPaperForms (ignore errors silently)
    try {
      const npfPayload = {
        name,
        email,
        country_dial_code: "+91",
        mobile,
        city,
        education,
        state: "Maharashtra",
        source: source || "direct", // Use traffic source
      };

      const npfResponse = await fetch(
        "https://api.nopaperforms.io/lead/v1/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "secret-key": process.env.NPF_SECRET_KEY,
            "access-key": process.env.NPF_ACCESS_KEY,
          },
          body: JSON.stringify(npfPayload),
        }
      );

      if (npfResponse.ok) {
        const npfData = await npfResponse.json();
        console.log("NPF Success:", npfData);
      }
    } catch (npfError) {
      // Silently ignore NPF errors
      console.error("NPF failed (ignored):", npfError.message);
    }

    // ✅ Always return success
    res.status(200).json({
      message: "Lead sent successfully!",
    });
  } catch (error) {
    console.error("Handler error:", error);
    res.status(500).json({ message: "Something went wrong!" });
  }
}
