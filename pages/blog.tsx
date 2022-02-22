import Link from 'next/link';

import Header from '../components/header';
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
export default function Blog({ posts }: BlogProps): JSX.Element {
  return (
    <>
      <Header />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="font-bebas text-3xl leading-9 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl">
            Title
          </h1>
          <div className="relative max-w-lg">
            <input
              aria-label="Search articles"
              type="text"
              // onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block py-2 px-4 w-full text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 rounded-md border border-gray-300 dark:border-gray-900"
            />
            <svg
              className="absolute top-3 right-3 w-5 h-5 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <ul>
          {posts.map((frontMatter) => {
            const { id, date, title, description } = frontMatter;
            return (
              <li key={id} className="py-4">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{date}</time>
                    </dd>
                  </dl>
                  <div className="space-y-3 xl:col-span-3">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight leading-8">
                        <Link passHref href={`/blog/${id}`}>
                          <h2 className="text-gray-900 dark:text-gray-100">
                            {title}
                          </h2>
                        </Link>
                      </h3>
                    </div>
                    <div className="max-w-none text-gray-500 dark:text-gray-400 prose">
                      {description}
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const posts = getAllPostsData();
  return {
    props: {
      posts,
    },
  };
};
