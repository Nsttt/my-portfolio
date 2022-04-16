import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

import type { ProjectList } from '@types';
import { getAllProjectsData } from '@services';
import { Header, Footer } from '@components';

interface PortfolioProps {
  projects: ProjectList;
}

const Portfolio: NextPage<PortfolioProps> = ({ projects }) => {
  return (
    <>
      <NextSeo title="Portfolio" canonical={document.URL} />
      <Header />
      <div className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="font-bebas text-3xl leading-9 tracking-wide text-bright-pink sm:text-4xl sm:leading-10 md:text-6xl">
            Portfolio
          </h1>
          <p>A small gallery of recent projects.</p>
        </div>
        <ul>
          {projects.map(
            ({ id, date, title, description }, index, { length }) => {
              return (
                <div key={id}>
                  <li className="py-4">
                    <Link passHref href={`/portfolio/${id}`}>
                      <Image
                        src={`/images/projects/${id}.webp`}
                        alt={id}
                        width={768}
                        height={200}
                        className="cursor-pointer rounded-lg object-cover object-top"
                      />
                    </Link>
                    <article className="mt-2 space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <div className="space-y-3 xl:col-span-4">
                        <div>
                          <h3 className="cursor-pointer font-bebas text-4xl font-bold leading-8 tracking-wide">
                            <Link passHref href={`/portfolio/${id}`}>
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
            }
          )}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const projects = getAllProjectsData();
  return {
    props: {
      projects,
    },
  };
};

export default Portfolio;
