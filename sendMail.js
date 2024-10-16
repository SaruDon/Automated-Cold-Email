const nodemailer = require("nodemailer");
const path =require("path")
require("dotenv").config();


let subject = 'Application for Backend Intern - Having Experience in AI Startup';

let position = 'Backend Intern'

// let persons = [
//   {
//     name: 'Afzal Nomani',
//     company: 'timelyAI',
//     email: 'afzal.nomani@timelyai.com'
//   },
//   {
//     name: 'Deepesh Rathod',
//     company: 'timelyAI',
//     email: 'deepesh.rathod@timelyai.com'
//   },
//   {
//     name: 'Mannica Khurana',
//     company: 'timelyAI',
//     email: 'mannica@timelyai.com'
//   },
//   {
//     name: 'Divya Agarwal',
//     company: 'timelyAI',
//     email: 'divya.agarwal@timelyai.com'
//   },
// ];




// let persons =[{
//   name:'Divya Agarwal',
//   company:'timelyAI',
//   email:'divya.agarwal@timelyai.com'
// }]

let persons =[
  {
    name: 'Sarvesh Khamkar',
    company: 'timelyAI',
    email: 'sarveshkhamkar321@gmail.com'
  }
]

async function main() {
  // Create a test account for Ethereal (for testing emails)
  // let testAccount = await nodemailer.createTestAccount();

  // Create a transporter object using Ethereal credentials
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

  for(const person of persons){
    let html =`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Template</title>
  </head>
  <body style="font-family: Arial, sans-serif; background-color: #f5f5f5; margin: 0; padding: 0; width: 100% !important; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;">
    <div style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px;">
      <!-- Header Section -->
      <div style="background-image: url('https://sarvesh-cold-email.s3.ap-south-1.amazonaws.com/Background.png'); background-size: cover; background-position: center; height: 250px; text-align: center; color: white; padding: 0;">
        <!-- Background image section -->
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="height: 250px;"></td>
          </tr>
        </table>
      </div>

      <!-- CEO Image Positioned at the Bottom -->
      <div style="text-align: center; margin-top: -20px;">
        <img src="https://sarvesh-cold-email.s3.ap-south-1.amazonaws.com/Sarvesh.jpeg" alt="Sarvesh Khamkar" style="border-radius: 50%; width: 120px; height: 120px; border: 4px solid #fff;" />
      </div>

      <!-- CEO Section -->
      <div style="text-align: center; margin-top: 5px;">
        <h2 style="font-size: 20px; color: #4a148c; margin: 5px 0;">Sarvesh Khamkar</h2>
        <p style="font-size: 16px; margin: 0; color: #888;">Software Developer</p>
      </div>

      <!-- Main Content -->
      <div style="background-color: #f1eafa; padding: 5px; border-radius: 5px; margin-top: 30px; text-align: left; line-height: 1.8;">
        <p style="margin: 5px 0; font-size: 16px; color: #555;">Dear ${person.name},</p>
        <p style="margin: 5px 0; font-size: 16px; color: #555;">I hope this email finds you well.</p>
        <p style="margin: 5px 0; font-size: 16px; color: #555;">
          My name is Sarvesh Khamkar, and I am writing to express my interest in the ${position} at ${person.company}, which I came across on LinkedIn. I
          believe my technical skills and passion align perfectly with your team’s mission.
        </p>
        <p style="margin: 5px 0; font-size: 16px; color: #555;">
          I am highly skilled in Java, SpringBoot, JavaScript, Node.js and have a strong foundation in data structures and algorithms. I was a part of the mple.ai project during my time at Code-B. 
          <a href="https://mple.ai/">mple.ai</a> is a Training and Hiring Platform, I gained significant experience in software development, working on cloud-based solutions and collaborating across teams. Some of my key contribution in mple.ai include:
        </p>

        <!-- Numbered List -->
        <table style="width: 100%; margin: 20px 0; border-spacing: 0;">
          <tr>
            <td style="padding: 12px; background-color: #4a148c; color: #ffffff; text-align: center; width: 40px; font-size: 18px; font-weight: bold;">1</td>
            <td style="padding: 12px; background-color: #f9f9f9; border: 1px solid #ddd; font-size: 16px; color: #333;">
              <strong>Automated interview email system:</strong> Created an automated email system using Node.js, MongoDB, and Nodemailer. This system handles interview links and expiration notifications, reducing manual intervention by 50%.
            </td>
          </tr>
          <tr>
            <td style="padding: 12px; background-color: #4a148c; color: #ffffff; text-align: center; width: 40px; font-size: 18px; font-weight: bold;">2</td>
            <td style="padding: 12px; background-color: #f9f9f9; border: 1px solid #ddd; font-size: 16px; color: #333;">
              <strong>Dynamic interview generation:</strong> Contributed to the Automated Interview Generation team. Developed an AI-driven interview system using OpenAI API and speech-to-text, generating dynamic questions based on resumes and previous responses to improve user engagement.
            </td>
          </tr>
          <tr>
            <td style="padding: 12px; background-color: #4a148c; color: #ffffff; text-align: center; width: 40px; font-size: 18px; font-weight: bold;">3</td>
            <td style="padding: 12px; background-color: #f9f9f9; border: 1px solid #ddd; font-size: 16px; color: #333;">
              <strong>Access control via AuthGuard:</strong> Implemented restrictions on candidate result access within the organization to ensure data privacy and compliance.
            </td>
          </tr>
          <tr>
            <td style="padding: 12px; background-color: #4a148c; color: #ffffff; text-align: center; width: 40px; font-size: 18px; font-weight: bold;">4</td>
            <td style="padding: 12px; background-color: #f9f9f9; border: 1px solid #ddd; font-size: 16px; color: #333;">
              <strong>Talent pool filters and dynamic flow diagrams:</strong> Developed a candidate filtering system for the job pool, utilizing various metrics such as score, role, and gender, implemented a React flow diagram to visualize the reporting structure of all employees within the organization.
            </td>
          </tr>
          <tr>
            <td style="padding: 12px; background-color: #4a148c; color: #ffffff; text-align: center; width: 40px; font-size: 18px; font-weight: bold;">5</td>
            <td style="padding: 12px; background-color: #f9f9f9; border: 1px solid #ddd; font-size: 16px; color: #333;">
              <strong>Landing page optimization:</strong> Created a user-friendly landing page in Svelte, increasing web traffic by 30%.
            </td>
          </tr>
          <tr>
            <td style="padding: 12px; background-color: #4a148c; color: #ffffff; text-align: center; width: 40px; font-size: 18px; font-weight: bold;">6</td>
            <td style="padding: 12px; background-color: #f9f9f9; border: 1px solid #ddd; font-size: 16px; color: #333;">
              <strong>Daily Bug solving:</strong> Worked with a software tester to resolve bugs on a daily basis.
            </td>
          </tr>
        </table>

        <p style="margin: 5px 0; font-size: 16px; color: #555;">
          I have attached my resume for your review and provided links to my LinkedIn and GitHub profiles below. I am excited to bring my skills and passion to ${person.company}. I would love to discuss how I can contribute to the team. Thank you for considering my application.
        </p>
        <div style="margin-top: 40px; text-align: left;">
          Best regards,<br />
          Sarvesh Khamkar,<br />
          <a href="mailto:sarveshkhamkar321@gmail.com" style="color: #4a148c; text-decoration: none;">sarveshkhamkar321@gmail.com</a><br />
          <a href="tel:+9321555257" style="color: #4a148c; text-decoration: none;">9321555257</a>
        </div>
      </div>

      <!-- Footer -->
      <div style="margin-top: 30px; font-size: 14px; color: #888; text-align: center; border-top: 1px solid #e6e6e6; padding-top: 20px;">
        <p>
          <a href="https://www.linkedin.com/in/sarvesh-khamkar-0597351b4/" target="_blank" style="color: #4a148c; text-decoration: none;">LinkedIn</a> |
          <a href="https://github.com/SaruDon" target="_blank" style="color: #4a148c; text-decoration: none;">GitHub</a>
        </p>
      </div>
    </div>
  </body>
</html>
`;

    try {
      let info = await transporter.sendMail({
        from: '"Sarvesh Khamkar" <sarveshkhamkar321@gmail.com>', // sender address
        to: person.email, // recipient's email
        subject: subject, // Subject line
        html: html, // html body  
        attachments: [
          {
            filename: 'Sarvesh.pdf', // Name of the PDF file
            path: pdfPath, // Path to the file
            contentType: 'application/pdf', // Content type
          }
        ],
      });

      console.log(`Message sent to ${person.name} (${person.email}): %s`, info.messageId);
    } catch (error) {
      console.error(`Failed to send email to ${person.name} (${person.email}):`, error);
    }
  }  
}

main().catch(console.error);
