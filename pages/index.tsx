import Header from '../components/header';
import Card from '../components/card';
import { getAllPostsData } from '../lib/getPosts';
import Image from 'next/image';
import Footer from '../components/footer';
import { getAllProjectsData } from '../lib/getProjects';
import Head from 'next/head';
import Link from 'next/link';

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
  projects: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    date: string;
    content: string;
    data: string;
  }[];
  projectList: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    date: string;
    content: string;
    data: string;
  }[];
}

export default function Home({
  posts,
  projects,
  projectList,
}: BlogProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Nstlopez</title>
        <meta property="og:title" content="Nstlopez" key="title" />
      </Head>
      <Header />
      <div className="flex flex-col">
        <div className="my-20 flex">
          <div className="flex flex-col">
            <h1 className="font-bebas text-6xl tracking-wide">
              <span className="text-bright-pink">Néstor </span>
              López
            </h1>
            <h4 className="text-sm text-neutral-400">
              Building software for humans.
            </h4>
            <h2 className="mt-1 text-lg">
              Frontend Engineer at&nbsp;
              <b>
                <a href="https://nexiona.com/" target="_blank" rel="noreferrer">
                  NEXIONA
                </a>
              </b>
            </h2>
            <p className="mt-4 max-w-lg text-base">
              Writing about the present and developing the future.
              <br />
              Huge web developer and software engineering enthusiast.
            </p>
          </div>
          <div className="relative ml-auto">
            <Image
              src="/portrait.jpeg"
              alt="Nestor Lopez"
              height={150}
              width={150}
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <h2 className="text-2xl font-bold">Latests Posts</h2>
        <div className="grid grid-cols-3 gap-5">
          {posts.map((frontMatter) => {
            return (
              <Card
                type="post"
                key={frontMatter.id}
                id={frontMatter.id}
                title={frontMatter.title}
                description={frontMatter.subtitle}
                date={frontMatter.date}
              />
            );
          })}
        </div>
        <h2 className="mt-8 text-2xl font-bold">Latests Projects</h2>
        <div className="grid grid-cols-3 gap-5 border-b border-white pb-4">
          {projects.map((frontMatter) => {
            return (
              <Card
                type="project"
                key={frontMatter.id}
                id={frontMatter.id}
                title={frontMatter.title}
                description={frontMatter.subtitle}
                date={frontMatter.date}
              />
            );
          })}
        </div>
        <ul className="flex flex-col">
          {projectList.slice(0, 3).map((project) => {
            return (
              <li key={project.id}>
                <article className="mt-2 inline space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <div className="space-y-3 xl:col-span-4">
                    <div>
                      <h3 className="cursor-pointer font-bebas text-2xl font-bold leading-8 tracking-wide">
                        <Link passHref href={`/portfolio/${project.id}`}>
                          <span className="tracking-wide text-bright-pink">
                            {project.title}
                          </span>
                        </Link>
                      </h3>
                      <p className="text-sm">{project.date}</p>
                    </div>
                    <div className="prose text-base text-gray-500 dark:text-gray-400">
                      {project.subtitle}
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
}

export const getStaticProps = async () => {
  const posts = getAllPostsData();
  const projects = getAllProjectsData();
  const projectList = getAllProjectsData().splice(2);

  return {
    props: {
      posts,
      projects,
      projectList,
    },
  };
};
