import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import ReactMarkdown from 'react-markdown';
import { ParsedUrlQuery } from 'querystring';
import Header from '../../components/header';
import { getPostData, getPostsIds } from '../../lib/getPosts';

interface Post {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  content: string;
}

interface PostPageProps {
  post: Post;
}

const Post: NextPage<PostPageProps> = ({ post }) => {
  return (
    <>
      <Header />
      <ReactMarkdown>{post.content}</ReactMarkdown>
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
