const sgMail = require("@sendgrid/mail");

export default async function sendMail(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { name, email, message } = JSON.parse(req.body);

  const content = {
    to: "nestor@nstlopez.com",
    from: "contact@nstlopez.com",
    replyTo: email,
    subject: `New Message From - ${name}`,
    text: message,
    html: `<p>${message}</p>`,
  };

  try {
    await sgMail.send(content);
    res.status(200).send("Message sent successfully.");
  } catch (err) {
    res.status(400).send("Message not send due an error.");
  }
}
