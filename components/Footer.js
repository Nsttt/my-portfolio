import Social from "./Social";

const Footer = () => (
  <div className="footer-wrapper">
    <Social className="social" />
    <div className="copyright">© {new Date().getFullYear()} Nestor Lopez.</div>
    <style jsx>{`
      .footer-wrapper {
        text-align: center;
        margin-top: 80px;
        padding: 80px 30px;
      }
      .social {
        align-items: center;
        
      }
      .copyright {
        margin-bottom: 20px;
      }
    `}</style>
  </div>
);

export default Footer;
