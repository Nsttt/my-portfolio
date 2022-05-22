import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Drawer } from './drawer';

const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <header className="mx-auto mt-4 flex items-center justify-between">
      <div className="flex flex-row text-center">
        <Link href="/" passHref>
          <a>
            <Image
              alt="Logo"
              src="/android-chrome-192x192.png"
              width={55}
              height={55}
            />
          </a>
        </Link>
        <div className="hidden cursor-pointer items-center md:flex">
          <Link href="/" passHref>
            <h2 className="group pr-5 pl-2 font-bebas text-4xl">
              <span className="text-bright-pink transition group-hover:text-white">
                NST
              </span>
              Lopez
            </h2>
          </Link>
        </div>
        <div className="hidden self-center md:block">
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
      </div>
      <button className="mr-3 space-y-2 md:hidden" onClick={() => openDrawer()}>
        <span className="block h-0.5 w-8 bg-bright-pink"></span>
        <span className="block h-0.5 w-8 bg-bright-pink"></span>
        <span className="block h-0.5 w-8 bg-bright-pink"></span>
      </button>
      <Drawer isOpen={isDrawerOpen} close={closeDrawer} />
    </header>
  );
};

export default Header;
