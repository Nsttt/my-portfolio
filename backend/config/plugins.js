module.exports = ({ env }) => ({
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: env("SENDGRID_API_KEY"),
    },
    settings: {
      defaultFrom: "nestor@nstlopez.com",
      defaultReplyTo: "nestor@nstlopez.com",
    },
  },
});
