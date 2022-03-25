import Header from '../components/header';
import Card from '../components/card';
import { getAllPostsData } from '../lib/getPosts';
import Image from 'next/image';
import Footer from '../components/footer';
import { getAllProjectsData, getDisplayProjectsData } from '../lib/getProjects';
import Head from 'next/head';
import Link from 'next/link';
import { ProjectList } from '../types/project';
import { PostList } from '../types/post';

interface BlogProps {
  posts: PostList;
  projects: ProjectList;
  projectList: ProjectList;
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
        <div className="my-6 flex">
          <div className="flex flex-col">
            <h1 className="font-bebas text-6xl tracking-wide">
              <span className="text-bright-pink">Néstor&nbsp;</span>
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
          {projectList.map((project, index) => {
            return (
              <li key={project.id}>
                <Link passHref href={`/portfolio/${project.id}`}>
                  <div className="cursor-pointer rounded-lg hover:bg-light-purple/40">
                    <article
                      className={`py-2 my-2 pl-1 space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0`}
                    >
                      <div className="space-y-3 xl:col-span-4">
                        <div className="inline-block">
                          <h3 className="cursor-pointer  text-3xl font-bold leading-8 tracking-wide">
                            <span className="mr-10 font-bebas tracking-wide text-bright-pink">
                              {project.title}
                            </span>
                            <span className="align-middle text-sm">
                              {project.subtitle}
                            </span>
                          </h3>
                        </div>
                      </div>
                    </article>
                  </div>
                </Link>
                {index !== 2 ? (
                  <div className="border-b border-gray-500" />
                ) : null}
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
  const projects = getDisplayProjectsData();
  const projectList = getAllProjectsData().splice(2).slice(0, 3);

  return {
    props: {
      posts,
      projects,
      projectList,
    },
  };
};
