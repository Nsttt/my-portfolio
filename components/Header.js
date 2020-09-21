import Logo from "../components/Logo";
import Menu from "../components/Menu";
import Social from "../components/Social"

const Header = () => (
  <div className="header-wrapper">
    <Logo />
    <Social className="social"/>
    <Menu />
    <style jsx>{`
      .header-wrapper {
        padding: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .social {
        justify-content: left;
      }
      @media (max-width: 600px) {
        .header-wrapper {
          display: block;
          text-align: center;
        }
        .social {
          
        }
      }
    `}</style>
  </div>
);

export default Header;
