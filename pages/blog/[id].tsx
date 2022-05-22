import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import type { ParsedUrlQuery } from 'querystring';
import ReactMarkdown from 'react-markdown';
import { NextSeo } from 'next-seo';

import type { Post } from '@types';
import { getPostData, getPostsIds } from '@services';
import { Header, Footer } from '@components';
import { useRouterPathname } from '@hooks';

interface PostPageProps {
  post: Post;
}

const Post: NextPage<PostPageProps> = ({ post }) => {
  const pathname = useRouterPathname();

  return (
    <>
      <NextSeo
        title={post.title}
        description={post.description}
        canonical={pathname}
      />
      <Header />
      <div className="container">
        <div className="mt-4">
          <div>
            <h1 className=" font-bebas text-6xl text-bright-pink">
              {post.title}
            </h1>
            <h2 className="text-lg">{post.subtitle}</h2>
            <h3 className="text-sm text-bright-pink">{post.date}</h3>
          </div>
        </div>
        <ReactMarkdown className="mt-4 space-y-4">{post.content}</ReactMarkdown>
      </div>
      <Footer />
    </>
  );
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = getPostsIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostPageProps, Params> = async ({
  params,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const post = getPostData(params!.id) as Post;
  return {
    props: {
      post,
    },
  };
};

export default Post;
