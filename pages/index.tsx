import Header from '../components/header';
import Card from '../components/card';
import { getAllPostsData } from '../lib/getPosts';
import Image from 'next/image';
import Footer from '../components/footer';
import { getAllProjectsData } from '../lib/getProjects';

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
}

export default function Home({ posts, projects }: BlogProps): JSX.Element {
  return (
    <>
      <Header />
      <div className="flex flex-col">
        <div className="flex my-20">
          <div className="flex flex-col">
            <h1 className="font-bebas text-5xl tracking-wide">
              <span className="text-bright-pink">Néstor </span>
              López
            </h1>
            <h4 className="text-xs text-neutral-400">
              Building software for humans.
            </h4>
            <h2 className="mt-1 text-sm">
              Frontend Engineer at{' '}
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
              className="object-cover rounded-full"
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
        <div className="grid grid-cols-3 gap-5">
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
        <Footer />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const posts = getAllPostsData();
  const projects = getAllProjectsData();

  return {
    props: {
      posts,
      projects,
    },
  };
};
