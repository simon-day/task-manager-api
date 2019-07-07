const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'levelupchinese@gmail.com',
    subject: 'Thanks for signing up!',
    text: `Welcome ${name}! Thanks for joining the Level Up Chinese club. Let me know how you get along with my app`
  });
};

const sendGoodbyeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'levelupchinese@gmail.com',
    subject: `Sorry to see you go ${name}`,
    text: `Let us know if there is anything we could of done to provide you with a better service`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendGoodbyeEmail
};
