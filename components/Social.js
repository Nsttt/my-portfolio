import Link from "next/link";
import { FaDiscord } from "react-icons/fa";

const Social = () => (
  <ul className="social">
    <li>
      <Link href="https://discord.com/invite/qDXCrK4">
        <FaDiscord />
      </Link>
    </li>
    <style jsx>{`
      .social {
        margin: 10px 0 0;
        padding: 0;
        list-style: none;
        display: flex;
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
