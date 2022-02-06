import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const Header = () => {
  const { t } = useTranslation('common');

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
          <a className="px-1">{t('header_home')}</a>
        </Link>
        <Link href="/blog">
          <a className="px-1">{t('header_blog')}</a>
        </Link>
        <Link href="/about">
          <a className="px-1">{t('header_about')}</a>
        </Link>
        <Link href="/contact">
          <a className="px-1">{t('header_contact')}</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
