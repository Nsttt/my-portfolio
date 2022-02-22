import Header from '../components/header';
import Card from '../components/card';
import { getAllPostsData } from '../lib/getPosts';
import Image from 'next/image';

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

export default function Home({ posts }: BlogProps): JSX.Element {
  return (
    <>
      <Header />
      <div className="flex flex-col">
        <div className="flex my-20">
          <div className="flex flex-col">
            <h1 className="font-bebas text-5xl">Néstor López</h1>
            <h2 className="">
              Frontend Engineer at <b>NEXIONA</b>
            </h2>
            <p className="mt-4 text-neutral-400">
              Building software for humans.
            </p>
          </div>
          <div className="relative ml-auto">
            <Image
              src="/portrait.jpeg"
              alt="Nestor Lopez"
              height={126}
              width={126}
              className="object-cover rounded-full"
            />
          </div>
        </div>
        <h2 className="text-2xl">Featured Posts</h2>
        <div className="grid grid-cols-2 gap-20">
          <div className="grid grid-cols-2 gap-5">
            {posts.map((frontMatter) => {
              return (
                <Card
                  key={frontMatter.id}
                  id={frontMatter.id}
                  title={frontMatter.title}
                  description={frontMatter.description}
                />
              );
            })}
          </div>
        </div>
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
