import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center my-0 mx-auto">
      <div className="flex items-center">
        <Link href="/" passHref>
          <div className="flex items-center cursor-pointer">
            <Image
              alt="Logo"
              src="/android-chrome-192x192.png"
              width={55}
              height={55}
            />
            <h2 className="group pr-5 pl-2 font-bebas text-3xl">
              <span className="text-bright-pink group-hover:text-white transition">
                NST
              </span>
              Lopez
            </h2>
          </div>
        </Link>
        <Link href="/">
          <a className="px-1">Home</a>
        </Link>
        <Link href="/blog">
          <a className="px-1">Blog</a>
        </Link>
        <Link href="/about">
          <a className="px-1">About</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
