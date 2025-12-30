// // import nodemailer from "nodemailer";

// // export default async function handler(req, res) {
// //   if (req.method !== "POST") return res.status(405).end();

// //   const {
// //     name,
// //     email,
// //     mobile,
// //     city,
// //     education,
// //     pageSource,
// //     fullUrl,
// //     source,
// //     program,
// //   } = req.body;

// //   if (!name || !email || !mobile) {
// //     return res.status(400).json({ message: "Missing fields" });
// //   }

// //   try {
// //     // 1️⃣ Send Email
// //     // const transporter = nodemailer.createTransport({
// //     //   host: "smtp.gmail.com",
// //     //   port: 465,
// //     //   secure: true,
// //     //   auth: {
// //     //     user: process.env.EMAIL_USER,
// //     //     pass: process.env.EMAIL_PASS,
// //     //   },
// //     // });

// //     // await transporter.sendMail({
// //     //   from: `iTpreneur <${process.env.EMAIL_USER}>`,
// //     //   to: "olioclientwebsiteleads@gmail.com",
// //     //   subject: "📣 Enquiry from iTPreneur Pune",
// //     //   text: `Name: ${name}
// //     //   Email: ${email}
// //     //   Mobile: ${mobile}
// //     //   City: ${city}
// //     //   Education: ${education}
// //     //   Page Source: ${pageSource}
// //     //   Traffic Source: ${source}
// //     //   Full URL: ${fullUrl}
// //     //   `,
// //     // });

// //     // 2️⃣ Send to Google Sheet
// //     await fetch(process.env.GS, {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify({
// //         name,
// //         email,
// //         mobile,
// //         city,
// //         education,
// //         pageName: pageSource,
// //         fullUrl,
// //         program,
// //       }),
// //     });

// //     // 3️⃣ Send to NoPaperForms (ignore errors silently)
// //     try {
// //       const npfPayload = {
// //         name,
// //         email,
// //         country_dial_code: "+91",
// //         mobile,
// //         city,
// //         education,
// //         state: "Maharashtra",
// //         source: source || "direct", // Use traffic source
// //       };

// //       const npfResponse = await fetch(
// //         "https://api.nopaperforms.io/lead/v1/create",
// //         {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //             "secret-key": process.env.NPF_SECRET_KEY,
// //             "access-key": process.env.NPF_ACCESS_KEY,
// //           },
// //           body: JSON.stringify(npfPayload),
// //         }
// //       );

// //       if (npfResponse.ok) {
// //         const npfData = await npfResponse.json();
// //         console.log("NPF Success:", npfData);
// //       }
// //     } catch (npfError) {
// //       // Silently ignore NPF errors
// //       console.error("NPF failed (ignored):", npfError.message);
// //     }

// //     // ✅ Always return success
// //     res.status(200).json({
// //       message: "Lead sent successfully!",
// //     });
// //   } catch (error) {
// //     console.error("Handler error:", error);
// //     res.status(500).json({ message: "Something went wrong!" });
// //   }
// // }
// export default async function handler(req, res) {
//   if (req.method !== "POST") return res.status(405).end();

//   const {
//     name,
//     email,
//     mobile,
//     city,
//     education,
//     pageSource,
//     fullUrl,
//     source,
//     program,
//     itpCenter,
//   } = req.body;

//   if (!name || !email || !mobile) {
//     return res.status(400).json({ message: "Missing fields" });
//   }

//   try {
//     // 🚀 Run both API calls in parallel for maximum speed
//     const promises = [
//       // Google Sheets API call
//       fetch(process.env.GS, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           email,
//           mobile,
//           city,
//           education,
//           pageName: pageSource,
//           fullUrl,
//           program,
//           itpCenter,
//         }),
//       }),

//       // NoPaperForms API call
//       fetch("https://api.nopaperforms.io/lead/v1/create", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "secret-key": process.env.NPF_SECRET_KEY,
//           "access-key": process.env.NPF_ACCESS_KEY,
//         },
//         body: JSON.stringify({
//           name,
//           email,
//           country_dial_code: "+91",
//           mobile,
//           city,
//           state: "Maharashtra",
//           source: source || "direct",
//           cf_itp_center: itpCenter,
//           field_qualification: education,
//         }),
//       }),
//     ];

//     // Wait for all promises to complete (but don't fail if one fails)
//     const results = await Promise.allSettled(promises);

//     // Log any failures for debugging (but don't block the response)
//     results.forEach((result, index) => {
//       if (result.status === "rejected") {
//         const apiName = index === 0 ? "Google Sheets" : "NoPaperForms";
//         console.error(
//           `${apiName} failed:`,
//           result.reason?.message || result.reason
//         );
//       }
//     });

//     // Check if at least Google Sheets was successful (primary requirement)
//     const gsResult = results[0];
//     if (gsResult.status === "rejected") {
//       throw new Error("Google Sheets submission failed");
//     }

//     // ✅ Return success
//     res.status(200).json({
//       message: "Lead sent successfully!",
//     });
//   } catch (error) {
//     console.error("Handler error:", error);
//     res.status(500).json({ message: "Something went wrong!" });
//   }
// }
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const {
    name,
    email,
    mobile,
    city,
    education,
    pageSource,
    fullUrl,
    source,
    program,
    itpCenter,
    passoutYear,
    isVerified = false,
  } = req.body;

  if (!name || !email || !mobile) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Additional validation for verified leads
  if (!isVerified) {
    return res.status(400).json({
      message: "Mobile number must be verified before submission",
    });
  }

  // Map ITP Center to ID
  const getItpCenterId = (center) => {
    if (!center) return "1";
    if (center.toLowerCase().includes("shivajinagar")) return "2";
    if (center.toLowerCase().includes("akurdi")) return "1";
    return "1";
  };

  // Map source to source_name ID
  const getSourceId = (sourceValue) => {
    if (!sourceValue) return "1";
    const lowerSource = sourceValue.toLowerCase();
    if (lowerSource.includes("google")) return "1"; // Google Ads
    if (lowerSource.includes("meta") || lowerSource.includes("facebook"))
      return "2"; // Meta Ads
    if (lowerSource.includes("youtube")) return "3"; // Youtube Ads
    return "1"; // default
  };

  try {
    const leadData = {
      name,
      email,
      mobile,
      city,
      education,
      pageName: pageSource,
      fullUrl,
      program,
      itpCenter,
      passoutYear,
      isVerified: isVerified,
      verifiedAt: new Date().toISOString(),
      submissionType: "OTP_Verified_Lead",
    };

    // 🚀 Run both API calls in parallel for maximum speed
    const promises = [
      // Google Sheets API call with enhanced data
      fetch(process.env.GS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leadData),
      }),

      // CRM API call
      fetch("https://crm.itpreneurpune.com/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.CRM_API_KEY,
        },
        body: JSON.stringify({
          full_name: name,
          city: city || "N/A",
          mobile: mobile,
          email: email,
          education_qualification: education || "N/A",
          passout_year: passoutYear || "N/A",
          itp_center: getItpCenterId(itpCenter),
          reference_name: "1", // Always 1
          source_name: getSourceId(source),
          pageURL: fullUrl || "",
        }),
      }),

      // NoPaperForms API call
      // fetch("https://api.nopaperforms.io/lead/v1/create", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     "secret-key": process.env.NPF_SECRET_KEY,
      //     "access-key": process.env.NPF_ACCESS_KEY,
      //   },
      //   body: JSON.stringify({
      //     name,
      //     email,
      //     country_dial_code: "+91",
      //     mobile,
      //     city,
      //     state: "Maharashtra",
      //     source: source || "direct",
      //     cf_itp_center: itpCenter,
      //     field_qualification: education,
      //     field_passout_year: passoutYear,
      //   }),
      // }),
    ];

    //  all promises to complete
    const results = await Promise.allSettled(promises);

    // Log any failures for debugging (but don't block the response)
    results.forEach((result, index) => {
      if (result.status === "rejected") {
        const apiName = index === 0 ? "Google Sheets" : "CRM";
        console.error(
          `${apiName} failed for verified lead:`,
          result.reason?.message || result.reason
        );
      }
    });

    // Check if at least Google Sheets was successful (primary requirement)
    const gsResult = results[0];
    if (gsResult.status === "rejected") {
      throw new Error("Google Sheets submission failed for verified lead");
    }

    // ✅ Return success with additional data
    res.status(200).json({
      message: "Verified lead sent successfully!",
      isVerified: true,
      mobile: mobile,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Verified Lead Handler error:", error);
    res.status(500).json({
      message: "Something went wrong while saving your verified information!",
    });
  }
}
