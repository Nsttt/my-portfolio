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
            <h1 className="font-bebas text-5xl">Néstor López</h1>
            <h2 className="">
              Frontend Engineer at <b>NEXIONA</b>
            </h2>
            <p className="mt-4 text-neutral-400">
              Helping developers build a faster web. Teaching about web
              development, serverless, and React / Next.js.
            </p>
          </div>
          <div className="flex flex-col my-20"></div>
          <div>
            <h2 className="text-2xl">Featured Posts</h2>
            <div className="grid grid-cols-2 gap-5">
              {posts.map((frontMatter) => {
                return (
                  <Card
                    key={frontMatter.id}
                    id={frontMatter.id}
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
