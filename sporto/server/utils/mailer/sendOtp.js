const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.post('/send-email', (req, res) => {
  const { recipient, subject, body } = req.body;

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    // Specify your email service provider configuration (e.g., Gmail, SMTP server details)
  });

  // Create the email message
  const mailOptions = {
    from: 'your-email@example.com',
    to: recipient,
    subject: subject,
    text: body
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
