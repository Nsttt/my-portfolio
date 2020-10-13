  import { FaDiscord, FaInstagram, FaTwitter, FaTwitch, FaGithub, } from "react-icons/fa";

const Social = () => (
  <div className="social">
      <a href="https://www.discord.com/invite/qDXCrK4" target="_blank">
        <FaDiscord />
      </a>
      <a href="https://www.github.com/nsttt" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.twitch.tv/nesteansttt" target="_blank">
        <FaTwitch />
      </a>
      <a href="https://www.instagram.com/nstlopez" target="_blank">
        <FaInstagram />
      </a>
      <a href="https://www.twitter.com/nstlopez" target="_blank">
        <FaTwitter />
      </a>
    <style jsx>{`
      .social {
        padding: 0;
      }
      .social a {
        display: inline-block;
        transition: transform 250ms;
        align-items: center;
        padding: 10px 2px;
        margin: 0 0.5rem;
      }
      .social a:hover {
        cursor: pointer;
        transform: translateY(-2px);
      }
    `}</style>
  </div>
);

export default Social;
