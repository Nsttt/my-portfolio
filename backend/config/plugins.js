module.exports = ({ env }) => ({
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID_API_KEY'),
    },
    settings: {
      defaultFrom: 'nestor@nstlopez.com',
      defaultReplyTo: 'nestor@nstlopez.com',
    },
  },
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID'),
      secretAccessKey: env('AWS_ACCESS_SECRET'),
      region: 'eu-west-3',
      params: {
        Bucket: 'strapiportfolioimages',
      },
    },
  },
});
