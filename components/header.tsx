import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

interface HeaderProps {
  currentPage: string;
}

const Header = ({ currentPage }: HeaderProps) => {
  const { t } = useTranslation('common');

  return (
    <header className="flex my-0 mx-auto justify-between items-center">
      <div className="flex items-center">
        <Link href="/" passHref>
          <div className="flex items-center cursor-pointer">
            <Image
              alt="Logo"
              src="/android-chrome-192x192.png"
              width={55}
              height={55}
            />
            <h2 className="px-2 font-bebas">
              <span className="text-bright-pink hover:text-white transition">
                NST
              </span>
              Lopez
            </h2>
          </div>
        </Link>
        <Link href="/">
          <a className="px-1">{t('header_home')}</a>
        </Link>
        <Link href="/portfolio">
          <a className="px-1">{t('header_portfolio')}</a>
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
