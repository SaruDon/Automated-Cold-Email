# Nodemailer Email Sender with PDF Attachment

This Node.js application uses Nodemailer to send customized emails with an attached PDF file to a list of recipients. The email content includes a pre-designed HTML template and is configured to send emails via Gmail using the user's credentials provided through environment variables.

## Features
- Sends emails to multiple recipients listed in the script.
- Customizable HTML email template.
- Attaches a PDF file (`Sarvesh.pdf`) to each email.
- Uses environment variables for secure email authentication.
- Handles errors and logs the email sending status.

## Prerequisites
- **Node.js**: Ensure that you have Node.js installed (v12 or higher).
- **Gmail Account**: You need a Gmail account with 2-factor authentication and an app-specific password for secure authentication.
- **Nodemailer**: This app uses Nodemailer to handle email transport.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/nodemailer-email-sender.git
    cd nodemailer-email-sender
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the project root and add the following environment variables:

    ```bash
    GMAIL_USER=your-email@gmail.com
    GMAIL_PASS=your-app-password
    ```

4. Add the email recipients and update the email content by modifying the `emailConfig.js` file or similar files in the project.

## Usage

1. Run the application:

    ```bash
    node index.js
    ```

    This will send the emails with the `Sarvesh.pdf` attachment to the list of recipients.

## Configuration

- The HTML email template can be found in the `emailTemplate.html` file. You can customize it to match your design and branding.
- The PDF file attachment (`Sarvesh.pdf`) should be placed in the designated folder or updated in the configuration script to point to the correct file location.

## Environment Variables

Make sure to set the following environment variables in the `.env` file:

- `GMAIL_USER`: Your Gmail address (from which emails will be sent).
- `GMAIL_PASS`: Your Gmail app-specific password (not your regular Gmail password).

## Logging and Error Handling

The application logs the status of each email (success or failure) to the console. In case of errors, it will output detailed error messages for debugging.

## Troubleshooting

1. **Authentication Issues**: Ensure you have created a Gmail app-specific password. Visit [Gmail App Passwords](https://myaccount.google.com/apppasswords) for more information.
2. **Sending Limits**: Gmail has a daily sending limit. Make sure your usage stays within Gmail's free quota to avoid email delivery failures.

