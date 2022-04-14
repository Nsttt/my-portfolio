import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="mx-auto mt-4 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/" passHref>
          <div className="flex cursor-pointer items-center">
            <Image
              alt="Logo"
              src="/android-chrome-192x192.png"
              width={55}
              height={55}
            />
            <h2 className="group pr-5 pl-2 font-bebas text-4xl">
              <span className="text-bright-pink transition group-hover:text-white">
                NST
              </span>
              Lopez
            </h2>
          </div>
        </Link>
        <Link href="/">
          <a className="px-2 text-lg">Home</a>
        </Link>
        <Link href="/portfolio">
          <a className="px-2 text-lg">Portfolio</a>
        </Link>
        <Link href="/blog">
          <a className="px-2 text-lg">Blog</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
