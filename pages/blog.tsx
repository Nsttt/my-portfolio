import type { NextPage } from 'next';
import Link from 'next/link';

import type { PostList } from '@types';
import { getAllPostsData } from '@services';

import { Header, Footer } from '@components';

interface BlogProps {
  posts: PostList;
}

const Blog: NextPage<BlogProps> = ({ posts }) => {
  return (
    <>
      <Header />
      <div className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="font-bebas text-3xl leading-9 tracking-wide text-bright-pink sm:text-4xl sm:leading-10 md:text-6xl">
            Blog
          </h1>
          <p>
            {
              "The place where I write about things I'm interested in. I'm not a professional writer, but I try to write about things that I find interesting and my own experiences."
            }
          </p>
        </div>
        <ul>
          {posts.map(({ id, date, title, subtitle }) => {
            return (
              <li key={id} className="py-4">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <div className="space-y-3 xl:col-span-3">
                    <div>
                      <h3 className="font-bebas text-3xl font-bold leading-8 tracking-wide">
                        <Link passHref href={`/blog/${id}`}>
                          <span className="tracking-wide text-bright-pink">
                            {title}
                          </span>
                        </Link>
                        <span className="pl-2 text-base">Project</span>
                      </h3>
                      <p className="text-sm">{date} • 10 min read</p>
                    </div>
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      {subtitle}
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const posts = getAllPostsData();
  return {
    props: {
      posts,
    },
  };
};

export default Blog;
