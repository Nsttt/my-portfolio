import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import Header from '../components/header';

const Home: NextPage = () => {
  const { t } = useTranslation(['home', 'common']);

  return (
    <>
      <Header currentPage="home" />
      <div className="flex">
        <div className="flex flex-col my-20">
          <h1 className="font-bebas">{t('title')}</h1>
          <h2>Néstor López</h2>
          <h3>Frontend Engineer at NEXIONA</h3>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async ({ locale }: Record<string, string>) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'home'])),
  },
});

export default Home;
