import Link from 'next/link';

import Header from '../components/header';
import { getAllPostsData } from '../lib/getPosts';

interface PortfolioProps {
  projects: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    date: string;
    content: string;
    data: string;
  }[];
}
export default function Portfolio({ projects }: PortfolioProps): JSX.Element {
  return (
    <>
      <Header />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="font-bebas text-3xl tracking-wide leading-9 text-bright-pink sm:text-4xl sm:leading-10 md:text-6xl">
            Portfolio
          </h1>
          <p>
            A small gallery of recent projects chosen by me. I&apos;ve done them
            all on my own and with amazing people from around the globe. If you
            like what you see, you can take a peek at my achievements page.
          </p>
        </div>
        <ul>
          {projects.map((frontMatter) => {
            const { id, date, title, subtitle } = frontMatter;
            return (
              <li key={id} className="py-4">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <div className="space-y-3 xl:col-span-3">
                    <div>
                      <h3 className="font-bebas text-3xl font-bold tracking-wide leading-8">
                        <Link passHref href={`/blog/${id}`}>
                          <span className="tracking-wide text-bright-pink">
                            {title}
                          </span>
                        </Link>
                      </h3>
                      <p className="text-sm">{date} • 10 min read</p>
                    </div>
                    <div className="max-w-none text-gray-500 dark:text-gray-400 prose">
                      {subtitle}
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
  const projects = getAllPostsData();
  return {
    props: {
      projects,
    },
  };
};
