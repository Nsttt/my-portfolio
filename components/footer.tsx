import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="container">
      <div className="flex flex-row justify-between mt-12">
        <div className="flex flex-row gap-3">
          <Link href="/">
            <a className="hover:text-white">Github</a>
          </Link>
          <Link href="/">
            <a className="hover:text-white">Twitter</a>
          </Link>
          <Link href="/">
            <a className="hover:text-white">LinkedIn</a>
          </Link>
          <Link href="/">
            <a className="hover:text-white">Mail</a>
          </Link>
        </div>
        <div className="flex flex-row">
          <Link href="/">
            <a className="hover:text-white">    RSS</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
