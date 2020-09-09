const Footer = () => (
  <div className="footer-wrapper">
    <div className="copyright">© {new Date().getFullYear()} Fi Studio.</div>
    <style jsx>{`
      .footer-wrapper {
        text-align: center;
        margin-top: 80px;
        padding: 80px 30px;
      }
      .copyright {
        margin-bottom: 20px;
      }
    `}</style>
  </div>
);

export default Footer;
