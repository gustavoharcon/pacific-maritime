import { Resend } from "resend";

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      inquiryType,
      describeYou,
      message,
      acceptTerms
    } = body;

    // Validation
    if (!firstName || !lastName || !email || !phone || !inquiryType || !describeYou || !message) {
      return new Response(JSON.stringify({ error: "All fields are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!acceptTerms) {
      return new Response(JSON.stringify({ error: "You must accept the terms" }), {
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

    const emailSubject = `New Contact Form Submission from ${firstName} ${lastName}`;

    const emailHtml = `
      <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e3e1de; border-radius: 8px; background-color: #efeeec; color: #131313;">
        <h2 style="font-family: 'Archivo Black', sans-serif; color: #1B2A4A; border-bottom: 2px solid #1B2A4A; padding-bottom: 10px; margin-top: 0;">
          Contact Form Message
        </h2>
        <p style="font-size: 16px; line-height: 1.5; color: #555;">
          A new message has been submitted from the website contact form:
        </p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 15px;">
          <thead>
            <tr style="background-color: #1B2A4A; color: #ffffff;">
              <th colspan="2" style="padding: 10px; text-align: left; border-top-left-radius: 4px; border-top-right-radius: 4px;">
                Contact Details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 10px; border: 1px solid #cbc8c5; font-weight: bold; width: 40%; background-color: #ffffff;">First Name</td>
              <td style="padding: 10px; border: 1px solid #cbc8c5; background-color: #ffffff;">${firstName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #cbc8c5; font-weight: bold; background-color: #ffffff;">Last Name</td>
              <td style="padding: 10px; border: 1px solid #cbc8c5; background-color: #ffffff;">${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #cbc8c5; font-weight: bold; background-color: #ffffff;">Email Address</td>
              <td style="padding: 10px; border: 1px solid #cbc8c5; background-color: #ffffff;">
                <a href="mailto:${email}" style="color: #1B2A4A; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #cbc8c5; font-weight: bold; background-color: #ffffff;">Phone Number</td>
              <td style="padding: 10px; border: 1px solid #cbc8c5; background-color: #ffffff;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #cbc8c5; font-weight: bold; background-color: #ffffff;">Inquiry Type</td>
              <td style="padding: 10px; border: 1px solid #cbc8c5; background-color: #ffffff;">${inquiryType}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #cbc8c5; font-weight: bold; background-color: #ffffff;">Described As</td>
              <td style="padding: 10px; border: 1px solid #cbc8c5; background-color: #ffffff;">${describeYou}</td>
            </tr>
          </tbody>
        </table>

        <table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 15px;">
          <thead>
            <tr style="background-color: #1B2A4A; color: #ffffff;">
              <th style="padding: 10px; text-align: left; border-top-left-radius: 4px; border-top-right-radius: 4px;">
                Message
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 10px; border: 1px solid #cbc8c5; background-color: #ffffff; white-space: pre-wrap;">${message}</td>
            </tr>
          </tbody>
        </table>

        <div style="margin-top: 30px; text-align: center; font-size: 13px; color: #818180; border-top: 1px solid #cbc8c5; padding-top: 15px;">
          This email was generated automatically by the Pacific Maritime Contact Form.
        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: "Pacific Maritime Contact <onboarding@resend.dev>",
      to: submissionEmail,
      subject: emailSubject,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend API error:", error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Submit contact form handler error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
