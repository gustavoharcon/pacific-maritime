import { Resend } from "resend";

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      fullName,
      email,
      capability,
      urgency,
      partDescription,
      companyName,
      teamSize,
      companyWebsite,
      country,
      bestDayToCall
    } = body;

    // Validation
    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const submissionEmail = process.env.FORM_SUBMISSION_EMAIL || "warehouse@pacmaritime.com";

    if (!apiKey) {
      console.error("Missing RESEND_API_KEY environment variable");
      return new Response(JSON.stringify({ error: "Email service is not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const resend = new Resend(apiKey);

    const emailSubject = `New RFQ Submission from ${fullName || email}`;
    
    const emailHtml = `
      <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e3e1de; border-radius: 8px; background-color: #efeeec; color: #131313;">
        <h2 style="font-family: 'Archivo Black', sans-serif; color: #1B2A4A; border-bottom: 2px solid #1B2A4A; padding-bottom: 10px; margin-top: 0;">
          Request For Quote Submission
        </h2>
        <p style="font-size: 16px; line-height: 1.5; color: #555;">
          A new multi-step RFQ form has been submitted with the details below:
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
              <td style="padding: 10px; border: 1px solid #cbc8c5; background-color: #ffffff;">${fullName || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #cbc8c5; font-weight: bold; background-color: #ffffff;">Email Address</td>
              <td style="padding: 10px; border: 1px solid #cbc8c5; background-color: #ffffff;">
                <a href="mailto:${email}" style="color: #1B2A4A; text-decoration: none;">${email}</a>
              </td>
            </tr>
          </tbody>
        </table>

        <table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 15px;">
          <thead>
            <tr style="background-color: #1B2A4A; color: #ffffff;">
              <th colspan="2" style="padding: 10px; text-align: left; border-top-left-radius: 4px; border-top-right-radius: 4px;">
                Project Information
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 10px; border: 1px solid #cbc8c5; font-weight: bold; width: 40%; background-color: #ffffff;">Capability Needed</td>
              <td style="padding: 10px; border: 1px solid #cbc8c5; background-color: #ffffff;">${capability || "Swiss turning"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #cbc8c5; font-weight: bold; background-color: #ffffff;">Project Urgency</td>
              <td style="padding: 10px; border: 1px solid #cbc8c5; background-color: #ffffff;">${urgency || "Not selected"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #cbc8c5; font-weight: bold; background-color: #ffffff;">Part Description</td>
              <td style="padding: 10px; border: 1px solid #cbc8c5; background-color: #ffffff;">${partDescription || "Not provided"}</td>
            </tr>
          </tbody>
        </table>

        <table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 15px;">
          <thead>
            <tr style="background-color: #1B2A4A; color: #ffffff;">
              <th colspan="2" style="padding: 10px; text-align: left; border-top-left-radius: 4px; border-top-right-radius: 4px;">
                Company Information
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 10px; border: 1px solid #cbc8c5; font-weight: bold; width: 40%; background-color: #ffffff;">Company Name</td>
              <td style="padding: 10px; border: 1px solid #cbc8c5; background-color: #ffffff;">${companyName || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #cbc8c5; font-weight: bold; background-color: #ffffff;">Engineering Team Size</td>
              <td style="padding: 10px; border: 1px solid #cbc8c5; background-color: #ffffff;">${teamSize || "2-10"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #cbc8c5; font-weight: bold; background-color: #ffffff;">Company Website</td>
              <td style="padding: 10px; border: 1px solid #cbc8c5; background-color: #ffffff;">
                ${companyWebsite ? `<a href="${companyWebsite.startsWith('http') ? companyWebsite : 'http://' + companyWebsite}" target="_blank" style="color: #1B2A4A; text-decoration: none;">${companyWebsite}</a>` : "Not provided"}
              </td>
            </tr>
          </tbody>
        </table>

        <table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 15px;">
          <thead>
            <tr style="background-color: #1B2A4A; color: #ffffff;">
              <th colspan="2" style="padding: 10px; text-align: left; border-top-left-radius: 4px; border-top-right-radius: 4px;">
                Confirmation & Details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 10px; border: 1px solid #cbc8c5; font-weight: bold; width: 40%; background-color: #ffffff;">Country</td>
              <td style="padding: 10px; border: 1px solid #cbc8c5; background-color: #ffffff;">${country || "Not selected"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #cbc8c5; font-weight: bold; background-color: #ffffff;">Best Day To Call</td>
              <td style="padding: 10px; border: 1px solid #cbc8c5; background-color: #ffffff;">${bestDayToCall || "Not provided"}</td>
            </tr>
          </tbody>
        </table>

        <div style="margin-top: 30px; text-align: center; font-size: 13px; color: #818180; border-top: 1px solid #cbc8c5; padding-top: 15px;">
          This email was generated automatically by the Pacific Maritime RFQ Form.
        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: "Pacific Maritime RFQ <onboarding@resend.dev>",
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
    console.error("Submit RFQ handler error:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
