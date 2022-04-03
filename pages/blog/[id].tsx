import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import type { ParsedUrlQuery } from 'querystring';
import ReactMarkdown from 'react-markdown';

import type { Post } from '@types';
import { getPostData, getPostsIds } from '@services';

import { Header, Footer } from '@components';

interface PostPageProps {
  post: Post;
}

const Post: NextPage<PostPageProps> = ({ post }) => {
  return (
    <>
      <Header />
      <ReactMarkdown>{post.content}</ReactMarkdown>
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
