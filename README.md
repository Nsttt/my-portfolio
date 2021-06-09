<p align="center">
  <a href="https://nstlopez.com">
    <img src="./frontend/public/android-chrome-256x256.png"  alt="NSTlopez Logo" />
  </a>
</p>
<h1 align="center">NSTlopez: Personal Portfolio</h1>
<p align="center">My portfolio for showing off all my projects nicely with a few paragraphs of explanation.</p>
<p align="center"><a href="https://nstlopez.com">Check it out !</a></p>
<div align="center">

[![Contributions](https://img.shields.io/badge/contributions-welcome-blue?style=flat-square)](https://github.com/nsttt/my-portfolio/compare/) [![Issues](https://img.shields.io/github/issues/nsttt/my-portfolio?style=flat-square)](https://github.com/Nsttt/my-portfolio/issues) [![License](https://img.shields.io/github/license/nsttt/my-portfolio?style=flat-square)](https://github.com/Nsttt/my-portfolio/blob/master/LICENSE.txt)

</div>
<br />
<br>
<p align="center">
  <a href="https://nstlopez.com">
    <img src="./frontend/public/image_medium.png" alt="Screenshot of the main page." />
  </a>
</p>

<br>

This repository contains my entire portfolio frontend and backend. Distributed in two folders up to date with the live version.

The page features:

#### Frontend: Made with Next.JS

- **Static Generation**. The HTML is generated at build time and will be reused on each request.
- **Server-side Rendering**. The HTML is generated on each request.

#### Backend: Made with Strapi

- **Self-hosted**. You can host and scale Strapi the way you want.
- **Database agnostic**. Currently working with **PostgreSQL**.
- **Customizable**. You can quickly build your logic by fully customizing APIs, routes, or plugins to fit your needs perfectly. (In this case **GraphQL**).

## Getting Started

Follow the steps below:

### ⏳ Installation

Install all required dependencies **on both folders** with this command:

- You can use `npm` if you like, but I highly recommend you stick with `yarn`.

```bash
yarn install
```

After all dependencies are installed you will require to fill a few environmental variables to make the page work perfectly.

Create a `.env.local` file inside the `frontend` folder having the following content.

```env
NEXT_PUBLIC_STRAPI_HOST="ip/host"

If you want the contact page to work -->
SEDNGRID_API_KEY="APIKEY"

If you want the newsletter page to work -->
MAILCHIMP_API_KEY="APIKEY"
MAILCHIMP_API_SERVER="APISERVER"
MAILCHIMP_AUDIENCE_ID="AUDIENCEID"
```

You will need to link a DB to Strapi as well, you can find more info on how to do that [here](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#database).

**Update 06/2021:** Due to some config on PostgreSQL, you might need to comment a line in `./backend/config/database.js` for Strapi to work on a development environment.

```js
        username: env('DATABASE_USERNAME', ''),
        password: env('DATABASE_PASSWORD', ''),
        ssl: { rejectUnauthorized: false }, --> Comment this line.
      },
```

In order for the page to not look completely empty I recommend you add some content on Strapi:
- At least 1 project with `heroproject` marked.
- Some data on the `single types` section.

After all that you can run both `frontend` and `backend` within their respective directories using the following commands.
- Frontend
```bash
yarn dev
```
- Backend
```bash
yarn develop
```

Please take note that the `frontend` won't run without a `backend` instance running beforehand.

## License

See the [LICENSE](./LICENSE) file for licensing information.
