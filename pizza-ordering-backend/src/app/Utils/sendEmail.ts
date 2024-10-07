import nodemailer from 'nodemailer';
import config from '../config';

export const sendEmail = async (to: string, link: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com.',
    port: 587,
    secure: config.NODE_ENV === 'production',
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: 'siiffuuu@gmail.com',
      pass: config.gmail_app_secret,
    },
  });

  await transporter.sendMail({
    from: 'siiffuuu@gmail.com', // sender address
    to, // list of receivers
    subject: 'Reset your password within ten mins!', // Subject line
    text: `click on this link to reset your password ==> ${link} `, // plain text body
    // html, // html body
  });
};