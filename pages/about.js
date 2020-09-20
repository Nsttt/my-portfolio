import Layout from "../components/Layout";
import Contact from "../components/Contact"
import Link from "next/link";

const About = () => (
  <Layout title="About Me">
    <h1>About Me</h1>
    <div className="about-text">
      <img className="picture" src="/picture.jpg" />
      <p>
        Hello! My Name is <b>Néstor</b>, I'm a full-stack software engineering
        student from Spain and I love making things. I spend most of my time a
        day learning new stuff and testing new things.
      </p>
      <p>
        I'm self-taugh, at least most of my knowledge is, and I enjoy studying
        by myself. I've done quite a few projects about many things. You can
        find most of them on my <Link href="/portfolio">portfolio</Link>.
      </p>
      <p>
        I have experience working with a fair variety of languages. That
        includes; Python, C, C#, Javascript and Typescript.
      </p>
    </div>
    <div>
      <span className="code-with">Things I work with</span>
      <div className="badges">
        <img
          alt="React"
          src="https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white"
        />
        <img
          alt="Next.js"
          src="https://img.shields.io/badge/-Next.js-252422?style=flat-square&logo=next.js&logoColor=white"
        />
        <img
          alt="Webpack"
          src="https://img.shields.io/badge/-Webpack-8DD6F9?style=flat-square&logo=webpack&logoColor=black"
        />
        <img
          alt="Docker"
          src="https://img.shields.io/badge/-Docker-46a2f1?style=flat-square&logo=docker&logoColor=white"
        />
        <img
          alt="github actions"
          src="https://img.shields.io/badge/-Github_Actions-2088FF?style=flat-square&logo=github-actions&logoColor=white"
        />
        <img
          alt="html5"
          src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"
        />
        <img
          alt="Javascript"
          src="https://img.shields.io/badge/-Javascript-F6DB17?style=flat-square&logo=Javascript&logoColor=black"
        />
        <img
          alt="TypeScript"
          src="https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white"
        />
        <img
          alt="Python"
          src="https://img.shields.io/badge/-Python-FFD963?style=flat-square&logo=Python&logoColor=black"
        />
        <img
          alt="C"
          src="https://img.shields.io/badge/-C-8900f2?style=flat-square&logo=C&logoColor=white"
        />
        <img
          alt="C#"
          src="https://img.shields.io/badge/-C%23-43aa8b?style=flat-square&logo=C-sharp&logoColor=white"
        />
        <img
          alt="Insomnia"
          src="https://img.shields.io/badge/-Insomnia-5849BE?style=flat-square&logo=insomnia&logoColor=white"
        />
        <img
          alt="Heroku"
          src="https://img.shields.io/badge/-Heroku-430098?style=flat-square&logo=heroku&logoColor=white"
        />
        <img
          alt="GraphQL"
          src="https://img.shields.io/badge/-GraphQL-E10098?style=flat-square&logo=graphql&logoColor=white"
        />
        <img
          alt="Apollo"
          src="https://img.shields.io/badge/-Apollo-a100f2?style=flat-square&logo=apollo-graphql&logoColor=white"
        />
        <img
          alt="Sass"
          src="https://img.shields.io/badge/-Sass-CC6699?style=flat-square&logo=sass&logoColor=white"
        />
        <img
          alt="Styled Components"
          src="https://img.shields.io/badge/-Styled_Components-db7092?style=flat-square&logo=styled-components&logoColor=white"
        />
        <img
          alt="git"
          src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white"
        />
        <img
          alt="npm"
          src="https://img.shields.io/badge/-NPM-CB3837?style=flat-square&logo=npm&logoColor=white"
        />
        <img
          alt="Yarn"
          src="https://img.shields.io/badge/-Yarn-99c1de?style=flat-square&logo=yarn&logoColor=black"
        />
        <img
          alt="Prettier"
          src="https://img.shields.io/badge/-Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=black"
        />
        <img
          alt="MongoDB"
          src="https://img.shields.io/badge/-MongoDB-13aa52?style=flat-square&logo=mongodb&logoColor=white"
        />
        <img
          alt="Nodejs"
          src="https://img.shields.io/badge/-Nodejs-43853d?style=flat-square&logo=Node.js&logoColor=white"
        />
        <img
          alt="VS Code"
          src="https://img.shields.io/badge/-VS%20Code-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white"
        />
      </div>
    </div>
    <div>
      <span className="mail">Send me a Mail!</span>
      <Contact />
    </div>
    <style jsx>{`
      .info {
        margin: 0 0 50px 0;
        padding: 0;
        list-style: none;
        font-size: 18px;
      }
      .email {
        font-weight: 700;
        font-size: 24px;
      }
      .about-text {
        color: #777;
        text-align: left;
        max-width: 800px;
        margin: 0 auto 30px;
        padding: 20px;
      }
      .picture {
        float: right;
        margin: 10px 0 20px 20px;
      }
      .mail,
      .code-with {
        margin: 0 0 50px 0;
        padding: 0;
        font-weight: 700;
        font-size: 24px;
      }
      .badges {
        margin: auto;
        max-width: 800px;
      }
      img {
        margin: 5px 0 0 5px;
      }
      @media (max-width: 600px) {
        .about-text .picture {
          float: none;
          display: block;
          margin: 0 auto 30px;
        }
      }
    `}</style>
  </Layout>
);

export default About;
