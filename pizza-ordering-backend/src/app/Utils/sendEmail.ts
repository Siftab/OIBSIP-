import nodemailer from 'nodemailer';
import config from '../config';

export const sendEmail = async (to: string, link: string,message:string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com.',
    port: 587,
    secure: config.NODE_ENV === 'production',
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: config.gmail_user,
      pass: config.gmail_app_secret,
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  await transporter.sendMail({
    from: config.gmail_user, // sender address
    to, // list of receivers
    subject: message, // Subject line
    text: `click on this link ==> ${link} `, // plain text body
    // html, // html body
  });


  console.log("mail sent")
};