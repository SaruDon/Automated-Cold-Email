const nodemailer = require("nodemailer");
const path =require("path")
require("dotenv").config();


let subject = 'Application for Junior Software Engineer - Having Experience in AI Startup';

let position = 'Jr Java Developer'

let persons =[
  {
    name : 'Sarvesh',
  comapny : 'Code-B',
  email : 'sarveshkhamkar999@gmail.com'
  },{
      name : 'Jay',
    comapny : 'Interactive Brokers',
    email : 'sarveshkhamkar123@gmail.com'
  },{
    name : 'Sarvesh',
    comapny : 'Interactive Brokers',
    email : 'sarveshkhamka321@gmail.com'
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
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f5f5f5;
        margin: 0;
        padding: 0;
        width: 100% !important;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }

      table {
        border-spacing: 0;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }

      img {
        border: 0;
        height: auto;
        line-height: 100%;
        outline: none;
        text-decoration: none;
      }

      .container {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        padding: 20px;
      }

      .header {
        background-image: url('https://auto-cold-email-bucket.s3.ap-south-1.amazonaws.com/ColdEmailImg/Background.png');
        background-size: cover;
        background-position: center;
        height: 250px;
        text-align: center;
        color: white;
        padding: 0;
      }

      .ceo-image-container {
        text-align: center;
        margin-top: -20px;
      }

      .ceo-image {
        border-radius: 50%;
        width: 120px;
        height: 120px;
        border: 4px solid #fff;
      }

      .ceo-section {
        text-align: center;
        margin-top: 5px;
      }

      .ceo-section h2 {
        font-size: 20px;
        color: #4a148c;
        margin: 5px 0;
      }

      .ceo-section p {
        font-size: 16px;
        margin: 0;
        color: #888;
      }

      .content {
        background-color: #f1eafa;
        padding: 5px;
        border-radius: 5px;
        margin-top: 30px;
        text-align: left;
        line-height: 1.8;
      }

      .content p {
        margin: 5px 0;
        font-size: 16px;
        color: #555;
      }

      .numbered-list {
        width: 100%;
        margin: 20px 0;
      }

      .numbered-list td {
        padding: 12px;
        border: 1px solid #ddd;
        font-size: 16px;
        color: #333;
        vertical-align: top;
      }

      .numbered-list td:first-child {
        background-color: #7a5b9f;
        color: #ffffff;
        text-align: center;
        width: 40px;
        font-size: 18px;
        font-weight: bold;
      }

      .numbered-list td:last-child {
        padding-left: 20px;
        background-color: #f9f9f9;
      }

      .signature {
        margin-top: 40px;
        text-align: left;
      }

      .footer {
        margin-top: 30px;
        font-size: 14px;
        color: #888;
        text-align: center;
        border-top: 1px solid #e6e6e6;
        padding-top: 20px;
      }

      .footer a {
        color: #4a148c;
        text-decoration: none;
        margin: 0 8px;
      }

      .footer a:hover {
        text-decoration: underline;
      }
      
      .para{
        padding-top:5px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <!-- Header Section -->
      <div class="header">
        <!-- Background image section -->
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="height: 250px;"></td>
          </tr>
        </table>
      </div>

      <!-- CEO Image Positioned at the Bottom -->
      <div class="ceo-image-container">
        <img src="https://auto-cold-email-bucket.s3.ap-south-1.amazonaws.com/ColdEmailImg/Sarvesh.jpeg" alt="Sarvesh Khamkar" class="ceo-image" />
      </div>

      <!-- CEO Section -->
      <div class="ceo-section">
        <h2>Sarvesh Khamkar</h2>
        <p>Software Developer</p>
      </div>

      <!-- Main Content -->
      <div class="content">
        <p class='para'>Dear ${person.name},</p>
        <p class='para'>I hope this email finds you well.</p>
        <p class='para'>
          My name is Sarvesh Khamkar, and I am writing to express my interest in
          the ${position} at ${person.comapny}, which I came across on LinkedIn. I
          believe my technical skills and passion align perfectly with your
          team’s mission.
        </p>
        <p class='para'>
          I am highly skilled in Java, SpringBoot, JavaScript, Node.js and have
          a strong foundation in data structures and algorithms. During my time
          at Code-B on the <a href="https://mple.ai/">mple.ai</a> AI Training
          and Hiring Platform team, I gained significant experience in software
          development, working on cloud-based solutions and collaborating across
          teams. Some of my key accomplishments include:
        </p>

        <!-- Numbered List -->
        <table class="numbered-list" cellpadding="0" cellspacing="0">
          <tr>
            <td style ="background-color:  #cba4fb;">1</td>
            <td>
              <strong>Automated interview email system:</strong> Created an
              automated email system using Node.js, MongoDB, and Nodemailer.
              This system handles interview links and expiration notifications,
              reducing manual intervention by 50%.
            </td>
          </tr>
          <tr>
            <td style ="background-color: #cba4fb;;">2</td>
            <td>
              <strong>Dynamic interview generation:</strong> Contributed to the
              Automated Interview Generation team. Developed an AI-driven
              interview system using OpenAI API and speech-to-text, generating
              dynamic questions based on resumes and previous responses to
              improve user engagement.
            </td>
          </tr>
          <tr>
            <td style ="background-color: #cba4fb;;">3</td>
            <td>
              <strong>Access control via AuthGuard:</strong> Implemented
              restrictions on candidate result access within the organization to
              ensure data privacy and compliance.
            </td>
          </tr>
          <tr>
            <td style ="background-color: #cba4fb;;">4</td>
            <td>
              <strong>Talent pool filters and dynamic flow diagrams:</strong>
              Developed a candidate filtering system for the job pool, utilizing
              various metrics such as score, role, and gender; implemented a
              React flow diagram to visualize the reporting structure of all
              employees within the organization.
            </td>
          </tr>
          <tr>
            <td style ="background-color: #cba4fb;;">5</td>
            <td>
              <strong>Landing page optimization:</strong> Created a
              user-friendly landing page in Svelte, increasing web traffic by
              30%.
            </td>
          </tr>
          <tr>
            <td style ="background-color: #cba4fb;;">6</td>
            <td>
              <strong>Daily Bug solving:</strong> Worked with a software tester
              to resolve bugs on a daily basis.
            </td>
          </tr>
        </table>

        <p class='para'>
          I have attached my resume for your review and provided links to my
          LinkedIn and GitHub profiles below. I would be thrilled to bring my
          skills and experience to ${person.comapny} and discuss how I can
          contribute to the team. Thank you for considering my application.
        </p>
        <div class="signature">
        Best regards,<br />
        Sarvesh Khamkar,<br />
        <a href="mailto:sarveshkhamkar321@gmail.com"
          >sarveshkhamkar321@gmail.com</a
        ><br />
        <a href="tel:+9321555257">9321555257</a>
      </div>
      </div>

      <!-- Signature -->
      

      <!-- Footer -->
      <div class="footer">
        <p>
          <a
            href="https://www.linkedin.com/in/sarvesh-khamkar-0597351b4/"
            target="_blank"
          >
            LinkedIn
          </a>
          |
          <a href="https://github.com/SaruDon" target="_blank">GitHub</a>
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
