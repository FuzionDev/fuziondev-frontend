import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";

const transporter = {
  auth: {
    // Update SendGrid API key here
    api_key: process.env.NEXT_PUBLIC_SENDGRID_KEY,
  },
};

const mailer = nodemailer.createTransport(sgTransport(transporter));

export default async (req, res) => {
  console.log(req.body);
  const { name, email, number, subject, text } = req.body;

  const data = {
    // Update your email here
    from: "usmanasif193@fuziondev.com",
    to: "umarasif737@gmail.com",
    subject: "Hi there",
    text: text,
    html: `
            <b>From:</b> ${name} <br /> 
            <b>Number:</b> ${number} <br /> 
            <b>Subject:</b> ${subject} <br /> 
            <b>Text:</b> ${text} 
        `,
  };
  try {
    const response = await mailer.sendMail(data);
    console.log(response);
    res.status(200).send("Email send successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error proccessing charge");
  }
};
