import { Resend } from "resend";

export async function POST(req) {
  try {
    const data = await req.formData();

    const fullName = data.get("fullName");
    const email = data.get("email");
    const phoneNumber = data.get("phoneNumber");
    const companyName = data.get("companyName");
    const country = data.get("country");
    const description = data.get("description");
    const cadFile = data.get("cadFile");

    // Validation
    if (!fullName || !email || !phoneNumber || !companyName || !country || !description || !cadFile) {
      return new Response(JSON.stringify({ error: "All fields and the CAD PDF drawing are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email format" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Verify cadFile type
    if (!(cadFile instanceof File)) {
      return new Response(JSON.stringify({ error: "Invalid file format upload" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Size limit verification (10MB max for email attachment safety)
    if (cadFile.size > 10 * 1024 * 1024) {
      return new Response(JSON.stringify({ error: "File size exceeds 10MB limit" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Read the file as an arrayBuffer
    const arrayBuffer = await cadFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Secure Magic Bytes Verification for PDF:
    // A valid PDF must begin with "%PDF" (hex: 25 50 44 46)
    if (buffer.length < 4 || buffer.toString("utf-8", 0, 4) !== "%PDF") {
      return new Response(JSON.stringify({ error: "Invalid file. The uploaded document is not a secure PDF" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const submissionEmail = process.env.FORM_SUBMISSION_EMAIL;

    if (!apiKey) {
      console.error("Missing RESEND_API_KEY environment variable");
      return new Response(JSON.stringify({ error: "Email service is not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const resend = new Resend(apiKey);
    const emailSubject = `New Secure RFQ Submission from ${fullName} (${companyName})`;

    const emailHtml = `
      <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e3e1de; border-radius: 8px; background-color: #efeeec; color: #131313;">
        <h2 style="font-family: 'Archivo Black', sans-serif; color: #1B2A4A; border-bottom: 2px solid #1B2A4A; padding-bottom: 10px; margin-top: 0;">
          Request For Quote Submission
        </h2>
        <p style="font-size: 16px; line-height: 1.5; color: #555;">
          A new secure RFQ form has been submitted with the details below:
        </p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 15px;">
          <thead>
            <tr style="background-color: #1B2A4A; color: #ffffff;">
              <th colspan="2" style="padding: 10px; text-align: left; border-top-left-radius: 4px; border-top-right-radius: 4px;">
                User Details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 10px; border: 1px solid #cbc8c5; font-weight: bold; width: 40%; background-color: #ffffff;">Full Name</td>
              <td style="padding: 10px; border: 1px solid #cbc8c5; background-color: #ffffff;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #cbc8c5; font-weight: bold; background-color: #ffffff;">Email Address</td>
              <td style="padding: 10px; border: 1px solid #cbc8c5; background-color: #ffffff;">
                <a href="mailto:${email}" style="color: #1B2A4A; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #cbc8c5; font-weight: bold; background-color: #ffffff;">Phone Number</td>
              <td style="padding: 10px; border: 1px solid #cbc8c5; background-color: #ffffff;">${phoneNumber}</td>
            </tr>
          </tbody>
        </table>

        <table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 15px;">
          <thead>
            <tr style="background-color: #1B2A4A; color: #ffffff;">
              <th colspan="2" style="padding: 10px; text-align: left; border-top-left-radius: 4px; border-top-right-radius: 4px;">
                Company & Location Information
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 10px; border: 1px solid #cbc8c5; font-weight: bold; width: 40%; background-color: #ffffff;">Company Name</td>
              <td style="padding: 10px; border: 1px solid #cbc8c5; background-color: #ffffff;">${companyName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #cbc8c5; font-weight: bold; background-color: #ffffff;">Country</td>
              <td style="padding: 10px; border: 1px solid #cbc8c5; background-color: #ffffff;">${country}</td>
            </tr>
          </tbody>
        </table>

        <table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 15px;">
          <thead>
            <tr style="background-color: #1B2A4A; color: #ffffff;">
              <th style="padding: 10px; text-align: left; border-top-left-radius: 4px; border-top-right-radius: 4px;">
                Project Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 10px; border: 1px solid #cbc8c5; background-color: #ffffff; white-space: pre-wrap;">${description}</td>
            </tr>
          </tbody>
        </table>

        <table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 15px;">
          <thead>
            <tr style="background-color: #1B2A4A; color: #ffffff;">
              <th colspan="2" style="padding: 10px; text-align: left; border-top-left-radius: 4px; border-top-right-radius: 4px;">
                File Attachment Details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 10px; border: 1px solid #cbc8c5; font-weight: bold; width: 40%; background-color: #ffffff;">CAD Drawing PDF</td>
              <td style="padding: 10px; border: 1px solid #cbc8c5; background-color: #ffffff;">${cadFile.name} (${(cadFile.size / (1024 * 1024)).toFixed(2)} MB) - <em>Attached Securely</em></td>
            </tr>
          </tbody>
        </table>

        <div style="margin-top: 30px; text-align: center; font-size: 13px; color: #818180; border-top: 1px solid #cbc8c5; padding-top: 15px;">
          This email was generated automatically by the Pacific Maritime RFQ Form.
        </div>
      </div>
    `;

    const { data: resData, error } = await resend.emails.send({
      from: "Pacific Maritime RFQ <onboarding@resend.dev>",
      to: submissionEmail,
      subject: emailSubject,
      html: emailHtml,
      attachments: [
        {
          filename: cadFile.name || "cad_drawing.pdf",
          content: buffer,
          contentType: "application/pdf"
        }
      ]
    });

    if (error) {
      console.error("Resend API error:", error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true, data: resData }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Submit RFQ handler error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
