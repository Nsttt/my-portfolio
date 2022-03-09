import Image from 'next/image';
import Link from 'next/link';

import Header from '../components/header';
import { getAllProjectsData } from '../lib/getProjects';

interface PortfolioProps {
  projects: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    date: string;
    content: string;
    data: string;
    thumbnail: string;
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
            {
              "A small gallery of recent projects chosen by me. I've done them all on my own and with help from amazing people around the globe."
            }
          </p>
          <p>
            If you like what you see, you can take a peek at my
            <Link href="/achievements"> achievements </Link>
            page.
          </p>
        </div>
        <ul>
          {projects.map((frontMatter) => {
            const { id, date, title, description, thumbnail } = frontMatter;
            return (
              <li key={id} className="py-4">
                <Link passHref href={`/portfolio/${id}`}>
                  <Image
                    src={thumbnail}
                    alt={id}
                    width={768}
                    height={200}
                    className="object-cover object-top cursor-pointer"
                  />
                </Link>
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <div className="space-y-3 xl:col-span-3">
                    <div>
                      <h3 className="font-bebas text-3xl font-bold tracking-wide leading-8 cursor-pointer">
                        <Link passHref href={`/portfolio/${id}`}>
                          <span className="tracking-wide text-bright-pink">
                            {title}
                          </span>
                        </Link>
                      </h3>
                      <p className="text-sm">{date} • 10 min read</p>
                    </div>
                    <div className=" text-gray-500 dark:text-gray-400 prose">
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
  const projects = getAllProjectsData();
  return {
    props: {
      projects,
    },
  };
};
