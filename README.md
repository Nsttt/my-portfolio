<p align="center">
  <a href="https://nstlopez.com">
    <img src="./frontend/public/android-chrome-256x256.png"  alt="NSTlopez Logo" />
  </a>
</p>
<h1 align="center">NSTlopez: Personal Portfolio</h1>
<p align="center">My portfolio for showing off all my projects nicely with a few paragraphs of explanation.</p>
<p align="center"><a href="https://nstlopez.com">Check it out !</a></p>
<br />
<br>
<p align="center">
  <a href="https://nstlopez.com">
    <img src="./frontend/public/image_medium.png" alt="Screenshot of the main page." />
  </a>
</p>

<br>

This repository contains my entire portfolio frontend and backend. Distributed in two folder up to date with the live version.

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

- You can use `npm` if you like, but I highly recomend you stick with `yarn`.

```bash
yarn install
```

After all dependencies are installed you will require to fill a few enviromental variables to make the page work perfectly.

Create a `.env.local` file inside the `frontend` folder having the following content.

```env
NEXT_PUBLIC_STRAPI_HOST="ip/host"
SEDNGRID_API_KEY="APIKEY"
```

You will need to link a DB to Strapi as well, you can find more info on how to do that [here](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#database).

## License

See the [LICENSE](./LICENSE) file for licensing information.
