import { FaDiscord, FaInstagram, FaTwitter, FaTwitch, FaGithub, } from "react-icons/fa";

const Social = () => (
  <ul className="social">
    <li>
      <a href="https://www.discord.com/invite/qDXCrK4" target="_blank">
        <FaDiscord />
      </a>
    </li>
    <li>
      <a href="https://www.github.com/nsttt" target="_blank">
        <FaGithub />
      </a>
    </li>
    <li>
      <a href="https://www.twitch.tv/nesteansttt" target="_blank">
        <FaTwitch />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/nstlopez" target="_blank">
        <FaInstagram />
      </a>
    </li>
    <li>
      <a href="https://www.twitter.com/nstlopez" target="_blank">
        <FaTwitter />
      </a>
    </li>
    <style jsx>{`
      .social {
        margin: 5px 0 0;
        padding: 0;
        list-style: none;
        display: flex;
        justify-content: center;
      }
      .social li {
        align-items: center;
        padding: 10px 2px;
        margin: 0 10px;
      }
      .social li:hover {
        cursor: pointer;
      }
    `}</style>
  </ul>
);

export default Social;
