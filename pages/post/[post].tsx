import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next';
import React from 'react';
import { getPostData, getPostsIds } from '../../lib/getPosts';

export const Post = () => {
  return <div>[post]</div>;
};

export async function getStaticPaths() {
  const paths = getPostsIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }): GetStaticProps {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
