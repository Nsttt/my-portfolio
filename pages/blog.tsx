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
          <h1 className="font-bebas text-3xl tracking-wide leading-9 text-bright-pink sm:text-4xl sm:leading-10 md:text-6xl">
            Blog
          </h1>
          <p>Here you can take a peek at the stuff I make, or talk about.</p>
        </div>
        <ul>
          {posts.map((frontMatter) => {
            const { id, date, title, description } = frontMatter;
            return (
              <li key={id} className="py-4">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <div className="space-y-3 xl:col-span-3">
                    <div>
                      <h3 className="font-bebas text-3xl font-bold tracking-wide leading-8">
                        <Link passHref href={`/blog/${id}`}>
                          <span className="text-bright-pink tracking-wide">
                            {title}
                          </span>
                        </Link>
                        <span className="pl-2  text-base">Project</span>
                      </h3>
                      <p className="text-sm">{date} • 10 min read</p>
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