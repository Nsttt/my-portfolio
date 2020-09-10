import Link from "next/link";

const Menu = () => (
  <ul className="menu">
    <li>
      <Link href="/">
        <a>Home</a>
      </Link>
    </li>
    <li>
      <Link href="/blog">
        <a>Services</a>
      </Link>
    </li>
    <li>
      <Link href="/portfolio">
        <a>Portfolio</a>
      </Link>
    </li>
    <li>
      <Link href="/about">
        <a>About</a>
      </Link>
    </li>
    <style jsx>{`
      .menu {
        margin: 5px 0 0;
        padding: 0;
        list-style: none;
        display: flex;
      }
      .menu li a {
        font-size: 22px;
        color: #111;
        font-weight: 300;
        padding: 5px 2px;
        margin: 0 10px;
        text-decoration: none;
      }
      .menu li a:hover {
        padding-bottom: 3px;
        border-bottom: 2px solid #ffe525;
      }
      @media (max-width: 600px) {
        .menu {
          display: block;
          margin-top: 20px;
        }
        .menu li {
          display: inline-block;
        }
        .menu li a {
          font-size: 18px;
        }
      }
    `}</style>
  </ul>
);

export default Menu;
