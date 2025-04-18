import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, mobile } = req.body;

  if (!name || !email || !mobile) {
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
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
      from: `"itpreneurpune" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for Contacting Us!",
      text: `Hi ${name},\n\nThanks for reaching out!\n\nWe have received your details:\n\nName: ${name}\nEmail: ${email}\nMobile: ${mobile}\n\nWe'll be in touch soon!`,
    });

    const sheet = await fetch(process.env.GS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, mobile }),
    });

    res.status(200).json({ message: "Email sent and data stored!" });
  } catch (error) {
    console.error("Handler error:", error);
    res.status(500).json({ message: "Something went wrong!" });
  }
}
