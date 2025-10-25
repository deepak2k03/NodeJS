import express from 'express';
import nodemailer from 'nodemailer';

const app = express();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'eamil',
    pass: 'password' // app password, not Gmail password
  }
});

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/mail", (req, res) => {
  res.render("mail");
});

app.post("/submit-email", (req, res) => {
  const mailOptions = {
    from: 'sman59472@gmail.com',
    to: req.body.to,
    subject: req.body.subject,
    text: req.body.body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.send("Error sending email: " + error.message);
    }
    res.send("Email sent successfully to " + req.body.to);
  });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/mail");
});
