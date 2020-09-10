import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = (props) => (
  <div className="site-wrapper">
    <Head>
      <title>
        {props.title ? `${props.title} | ` : ""}
        Néstor López Portfolio
      </title>
      {props.description ? (
        <meta name="description" content={props.description} />
      ) : null}
    </Head>

    <Header />

    <div className="content-wrapper">{props.children}</div>

    <Footer />

    <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      html,
      body {
        background-image:
          radial-gradient(#0099FF33 1px, transparent 1px),
          radial-gradient(#0099FF33 1px, transparent 1px);
        background-position: 0 0, 25px 25px;
        background-size: 50px 50px;
        padding: 0;
        margin: 0;
        font-size: 20px;
        line-height: 1.7;
        font-weight: 400;
        color: #454545;
        font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI",
          "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif;
        text-rendering: optimizeLegibility;
      }

      a {
        color: #1b789e;
        text-decoration: none;
      }

      a:hover {
        color: #166281;
      }

      h1,
      h2,
      h3 {
        margin: 40px 0 30px;
      }

      h1 {
        font-size: 42px;
      }

      h2 {
        font-size: 36px;
      }

      p {
        margin: 0 0 10px;
      }

      img {
        max-width: 100%;
      }

      /* Layout */

      .content-wrapper {
        min-height: 600px;
        text-align: center;
      }
    `}</style>
  </div>
);

export default Layout;
