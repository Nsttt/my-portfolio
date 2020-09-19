import nodemailer from "nodemailer";

const emailPass = "../../public/settings.json";

const transporter = nodemailer.createTransport({
  host: "",
  port: 25,
  auth: {
    user: "nestor@nstlopez.com",
    pass: emailPass,
  },
});

export default async (req, res) => {
  const { senderMail, name, content, recipientMail } = req.body;

  // Check if fields are all filled
  if (
    senderMail === "" ||
    name === "" ||
    content === "" ||
    recipientMail === ""
  ) {
    res.status(403).send("");
    return;
  }

  const mailerRes = await mailer({
    senderMail,
    name,
    text: content,
    recipientMail,
  });
  res.send(mailerRes);
};

const mailer = ({ senderMail, name, text, recipientMail }) => {
  const from =
    name && senderMail ? `${name} <${senderMail}>` : `${name || senderMail}`;
  const message = {
    from,
    to: `${recipientMail}`,
    subject: `New message from ${from}`,
    text,
    replyTo: from,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};
