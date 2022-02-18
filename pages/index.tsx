import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import Header from '../components/header';
import Card from '../components/card';
import { getAllPostsData } from '../lib/getPosts';

interface BlogProps {
  posts: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    date: string;
    content: string;
    data: string;
  }[];
}

export default function Home({ posts }: BlogProps): JSX.Element {
  const { t } = useTranslation(['home', 'common']);

  return (
    <>
      <Header />
      <div className="flex">
        <div className="grid grid-cols-2 gap-20">
          <div className="flex flex-col my-20">
            <h1 className="font-bebas text-9xl">Néstor López</h1>
            <h3 className="text-xl">Frontend Engineer at NEXIONA</h3>
            <h2 className="font-bebas text-4xl">{t('title')}</h2>
          </div>
          <div className="flex flex-col my-20">
            <h2 className="text-2xl">Featured Posts</h2>
            <div className="grid grid-cols-2 gap-5">
              {posts.map((frontMatter) => {
                return (
                  <Card
                    key={frontMatter.id}
                    title={frontMatter.title}
                    description={frontMatter.description}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async ({ locale }: Record<string, string>) => {
  const posts = getAllPostsData();

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
      posts,
    },
  };
};
