import type { NextPage } from 'next';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

import type { PostList } from '@types';
import { getAllPostsData } from '@services';
import { Header, Footer } from '@components';

interface BlogProps {
  posts: PostList;
}

const Blog: NextPage<BlogProps> = ({ posts }) => {
  return (
    <>
      <NextSeo title="Blog" canonical={document.URL} />
      <Header />
      <div className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="font-bebas text-3xl leading-9 tracking-wide text-bright-pink sm:text-4xl sm:leading-10 md:text-6xl">
            Blog
          </h1>
          <p>
            {
              "The place where I write about things I'm interested in. I'm not a professional writer, but I enjoy sharing my thoughts."
            }
          </p>
        </div>
        <ul>
          {posts.map(({ id, date, title, description }, index, { length }) => {
            return (
              <div key={id}>
                <li className="py-4">
                  <article className="mt-2 space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <div className="space-y-3 xl:col-span-4">
                      <div>
                        <h3 className="cursor-pointer font-bebas text-4xl font-bold leading-8 tracking-wide">
                          <Link passHref href={`/blog/${id}`}>
                            <span className="tracking-wide text-bright-pink">
                              {title}
                            </span>
                          </Link>
                        </h3>
                        <p className="text-sm">{date}</p>
                      </div>
                      <div className="prose text-base text-gray-500 dark:text-gray-400">
                        {description}
                      </div>
                    </div>
                  </article>
                </li>
                {length - 1 !== index ? (
                  <div className="border-b border-gray-500" />
                ) : null}
              </div>
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
