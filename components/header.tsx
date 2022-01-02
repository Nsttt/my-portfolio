import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const Header = () => {
  const { t } = useTranslation('common');

  return (
    <header>
      <div>
        <Image
          alt="Logo"
          src="/android-chrome-192x192.png"
          width={55}
          height={55}
        />
        <Link href="/">{t('header_home')}</Link>
        <Link href="/portfolio">{t('header_portfolio')}</Link>
        <Link href="/about">{t('header_about')}</Link>
        <Link href="/contact">{t('header_contact')}</Link>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/nestorlopezlopez/">
          <Image alt="LinkedIn" src="/linkedin.svg" width={24} height={24} />
        </a>
        <a href="https://github.com/Nsttt/">
          <Image alt="Github" src="/github.svg" width={24} height={24} />
        </a>
        <a href="https://twitter.com/nstlopez/">
          <Image alt="Twitter" src="/twitter.svg" width={24} height={24} />
        </a>
      </div>
    </header>
  );
};

export default Header;
