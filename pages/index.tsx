import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from '../components/header';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export const getStaticProps = async ({ locale }: Record<string, string>) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default Home;
