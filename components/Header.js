import Logo from "../components/Logo";
import Menu from "../components/Menu";
import Social from "../components/Social"

const Header = () => (
  <div className="header-wrapper">
    <Logo />
    <Social />
    <Menu />
    <style jsx>{`
      .Social {
        justify-content: center ;
        
      }

      .header-wrapper {
        padding: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
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
