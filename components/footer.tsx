import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="container my-7">
      <div className="flex flex-row justify-between ">
        <div className="flex flex-row gap-3">
          <a
            className="hover:text-white"
            href="https://github.com/Nsttt"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>

          <a
            className="hover:text-white"
            href="https://twitter.com/nstlopez"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            className="hover:text-white"
            href="https://www.linkedin.com/in/nestorlopezlopez/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a className="hover:text-white" href="mailto:nestor@nstlopez.com">
            Mail
          </a>
        </div>
        <div className="flex flex-row">
          <Link href="/">
            <a className="hover:text-white"> RSS</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
