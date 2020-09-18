import Logo from "../components/Logo";
import Menu from "../components/Menu";
import Social from "../components/Social"

const Header = () => (
  <div className="header-wrapper">
    <Logo />
    <Social className="social-bar"/>
    <Menu />
    <style jsx>{`
      .header-wrapper {
        padding: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .social-bar {
        align-items: left;
      }
      @media (max-width: 600px) {
        .header-wrapper {
          display: block;
          text-align: center;
        }
      }
    `}</style>
  </div>
);

export default Header;
