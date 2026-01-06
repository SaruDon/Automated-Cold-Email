const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");
require("dotenv").config();

let subject = 'M.Tech CSE (AI) Student Seeking Software Development Internship';

// Read contacts from JSON file
const jsonFilePath = path.join(__dirname, 'salesql-contacts.json');
let persons = [];

try {
  const jsonData = fs.readFileSync(jsonFilePath, 'utf-8');
  persons = JSON.parse(jsonData);
  console.log(`✅ Loaded ${persons.length} contacts from ${jsonFilePath}\n`);
} catch (error) {
  console.error(`❌ Error reading JSON file: ${error.message}`);
  console.log('Make sure salesql-contacts.json exists in the same directory as this script.');
  process.exit(1);
}

async function main() {
  // Create a transporter object using Gmail
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER_APP,
      pass: process.env.APP_PASSWORD,
    },
  });

  const pdfPath = path.join(__dirname, 'Sarvesh.pdf');

  // Verify PDF exists
  if (!fs.existsSync(pdfPath)) {
    console.error('❌ PDF file not found at:', pdfPath);
    process.exit(1);
  }

  // Calculate total emails to send
  let totalEmailsToSend = 0;
  persons.forEach(person => {
    if (person.emails && person.emails.length > 0) {
      totalEmailsToSend += person.emails.length;
    } else if (person.email) {
      totalEmailsToSend += 1;
    }
  });

  console.log(`📧 Starting to send emails to ${persons.length} contacts (${totalEmailsToSend} total emails)...\n`);

  let emailsSentCount = 0;
  let emailsFailedCount = 0;

  for (const person of persons) {
    // Get all emails for this person
    let recipientEmails = [];
    
    // Handle new format with multiple emails
    if (person.emails && person.emails.length > 0) {
      recipientEmails = person.emails;
    } 
    // Handle old format with single email
    else if (person.email) {
      recipientEmails = [person.email];
    }

    // Skip if no email found
    if (recipientEmails.length === 0) {
      console.log(`⚠️  Skipping ${person.name} - No email found\n`);
      continue;
    }

    console.log(`\n📋 Processing ${person.name} from ${person.company} (${recipientEmails.length} email${recipientEmails.length > 1 ? 's' : ''})`);

    // Send email to each address for this person
    for (let i = 0; i < recipientEmails.length; i++) {
      const recipientEmail = recipientEmails[i];
      const emailNumber = i + 1;

      // Get email details if available
      let emailTag = '';
      let isVerified = false;
      if (person.emailDetails) {
        const emailDetail = person.emailDetails.find(detail => detail.email === recipientEmail);
        if (emailDetail) {
          emailTag = emailDetail.tag;
          isVerified = emailDetail.verified;
        }
      }

      let html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Template</title>
  </head>
  <body style="font-family: Arial, sans-serif; background-color: #f5f5f5; margin: 0; padding: 0; width: 100%; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f5f5f5; margin: 0; padding: 20px 0;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #ffffff; margin: 0 auto;">
            <!-- Header Section -->
            <tr>
              <td style="background-image: url('https://auto-email-sarvesh.s3.us-east-1.amazonaws.com/ColdEmailImg/Background.png'); background-size: cover; background-position: center; height: 250px; text-align: center; color: white; padding: 0;">
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="height: 250px;"></td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- CEO Image -->
            <tr>
              <td align="center" style="margin-top: -20px; padding-top: 0;">
                <img src="https://auto-email-sarvesh.s3.us-east-1.amazonaws.com/ColdEmailImg/Sarvesh.jpeg" alt="Sarvesh Khamkar" style="border-radius: 50%; width: 120px; height: 120px; border: 4px solid #fff; display: block; margin-top: -60px;" />
              </td>
            </tr>

            <!-- CEO Section -->
            <tr>
              <td align="center" style="padding: 5px 20px 0 20px;">
                <h2 style="font-size: 20px; color: #4a148c; margin: 5px 0; font-weight: bold;">Sarvesh Khamkar</h2>
                <p style="font-size: 16px; margin: 0; color: #888;">Software Developer</p>
              </td>
            </tr>

            <!-- Main Content -->
            <tr>
              <td style="background-color: #f1eafa; padding: 20px; border-radius: 5px; margin: 30px 20px; text-align: left;">
                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="font-size: 16px; color: #555; line-height: 1.8; padding: 5px 0;">
                      Dear ${person.name},
                    </td>
                  </tr>
                  <tr>
                    <td style="font-size: 16px; color: #555; line-height: 1.8; padding: 5px 0;">
                      I hope you're doing well.
                    </td>
                  </tr>
                  <tr>
                    <td style="font-size: 16px; color: #555; line-height: 1.8; padding: 5px 0;">
                      My name is Sarvesh Khamkar, and I am currently pursuing <strong>M.Tech in Computer Science (Artificial Intelligence)</strong> at <strong>IIIT Pune</strong> (Indian Institute of Information Technology, Pune). I'm reaching out to explore potential <strong>Software Development Internship</strong> opportunities at ${person.company}.
                    </td>
                  </tr>
                  <tr>
                    <td style="font-size: 16px; color: #555; line-height: 1.8; padding: 5px 0;">
                      I have hands-on experience building <strong>real-world, production-ready systems</strong> using <strong>Java, Spring Boot, Node.js, React, and JavaScript</strong>. Recently, I worked as a <strong>Full Stack Developer</strong> on an AI-based hiring platform <a href="https://mple.ai/" style="color: #4a148c; text-decoration: none;">mple.ai</a>, where I:
                    </td>
                  </tr>
                  <tr>
                    <td style="font-size: 16px; color: #555; line-height: 1.8; padding: 5px 0 5px 20px;">
                      • Built <strong>automated interview email workflows</strong> using Node.js & MongoDB<br/>
                      • Worked on <strong>AI-driven interview generation</strong> using OpenAI APIs<br/>
                      • Developed <strong>backend APIs and frontend features</strong> used by real users
                    </td>
                  </tr>
                  <tr>
                    <td style="font-size: 16px; color: #555; line-height: 1.8; padding: 5px 0;">
                      I enjoy working on <strong>scalable systems</strong>, writing <strong>clean code</strong>, and learning fast in real engineering environments.
                    </td>
                  </tr>
                  <tr>
                    <td style="font-size: 16px; color: #555; line-height: 1.8; padding: 5px 0;">
                      I've attached my resume for your review. You can also find my work here:
                    </td>
                  </tr>
                  <tr>
                    <td style="font-size: 16px; color: #555; line-height: 1.8; padding: 5px 0 5px 20px;">
                      • LeetCode: <a href="https://leetcode.com/u/SaruDon/" target="_blank" style="color: #4a148c; text-decoration: none;">https://leetcode.com/u/SaruDon/</a><br/>
                      • GitHub: <a href="https://github.com/SaruDon" target="_blank" style="color: #4a148c; text-decoration: none;">https://github.com/SaruDon</a><br/>
                      • LinkedIn: <a href="https://www.linkedin.com/in/sarvesh-khamkar-0597351b4/" target="_blank" style="color: #4a148c; text-decoration: none;">https://www.linkedin.com/in/sarvesh-khamkar-0597351b4/</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="font-size: 16px; color: #555; line-height: 1.8; padding: 5px 0;">
                      If you find my profile relevant, I would appreciate the opportunity to briefly connect.
                    </td>
                  </tr>
                  <tr>
                    <td style="font-size: 16px; color: #555; line-height: 1.8; padding: 5px 0;">
                      Thank you for your time and consideration.
                    </td>
                  </tr>
                  <tr>
                    <td style="font-size: 16px; color: #555; line-height: 1.8; padding: 20px 0 0 0;">
                      Best regards,<br />
                      Sarvesh Khamkar<br />
                      📧 <a href="mailto:sarveshdev2002@gmail.com" style="color: #4a148c; text-decoration: none;">sarveshdev2002@gmail.com</a><br />
                      📞 <a href="tel:+9321555257" style="color: #4a148c; text-decoration: none;">9321555257</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td align="center" style="margin-top: 30px; font-size: 14px; color: #888; text-align: center; border-top: 1px solid #e6e6e6; padding: 20px;">
                <a href="https://www.linkedin.com/in/sarvesh-khamkar-0597351b4/" target="_blank" style="color: #4a148c; text-decoration: none; margin: 0 8px;">LinkedIn</a>
                |
                <a href="https://github.com/SaruDon" target="_blank" style="color: #4a148c; text-decoration: none; margin: 0 8px;">GitHub</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;

      try {
        let info = await transporter.sendMail({
          from: '"Sarvesh Khamkar" <sarveshkhamkar321@gmail.com>',
          to: recipientEmail,
          subject: subject,
          html: html,
          attachments: [
            {
              filename: 'Sarvesh.pdf',
              path: pdfPath,
              contentType: 'application/pdf',
            }
          ],
        });

        emailsSentCount++;
        const verificationBadge = isVerified ? '✓' : '✗';
        const tagInfo = emailTag ? ` [${emailTag}]` : '';
        console.log(`  ${emailNumber}/${recipientEmails.length} ✅ Sent to: ${recipientEmail} ${verificationBadge}${tagInfo}`);
        console.log(`     Message ID: ${info.messageId}`);
        
        // Add a small delay between emails to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 2000));
        
      } catch (error) {
        emailsFailedCount++;
        console.error(`  ${emailNumber}/${recipientEmails.length} ❌ Failed: ${recipientEmail} - ${error.message}`);
      }
    }
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('🎉 Email sending process completed!');
  console.log('='.repeat(60));
  console.log(`✅ Successfully sent: ${emailsSentCount} emails`);
  console.log(`❌ Failed: ${emailsFailedCount} emails`);
  console.log(`📊 Total processed: ${emailsSentCount + emailsFailedCount} emails to ${persons.length} contacts`);
  console.log('='.repeat(60));
}

main().catch(console.error);