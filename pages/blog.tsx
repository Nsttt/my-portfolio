import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Header from '../components/header';
import { getPostsData } from '../lib/getPosts';

interface BlogProps {
  posts: {
    slug: string;
    title: string;
  }[];
}
export default function Blog({ posts }: BlogProps): JSX.Element {
  const { t } = useTranslation(['home', 'common']);

  return (
    <>
      <Header />
      <div className="flex">
        {posts.map(({ slug, title }) => (
          <h1 key={slug}>{title}</h1>
        ))}
      </div>
    </>
  );
}

export const getStaticProps = async ({ locale }: Record<string, string>) => {
  const posts = getPostsData();

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
      posts,
    },
  };
};
