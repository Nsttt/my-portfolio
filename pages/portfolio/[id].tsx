import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import ReactMarkdown from 'react-markdown';
import { ParsedUrlQuery } from 'querystring';

import Header from '../../components/header';
import { getProjectData, getProjectsIds } from '../../lib/getProjects';
import Footer from '../../components/footer';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  content: string;
}

interface ProjectPageProps {
  project: Project;
}

const Project: NextPage<ProjectPageProps> = ({ project }) => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="grid grid-cols-2 mt-4">
          <div>
            <h1 className=" font-bebas text-6xl text-bright-pink">
              {project.title}
            </h1>
            <h2 className="text-lg">{project.subtitle}</h2>
            <h3 className="text-sm text-bright-pink">{project.date}</h3>
          </div>
          <div className="flex flex-col">
            <a className="group inline-flex overflow-hidden relative justify-center items-center self-end p-0.5 mr-2 mb-2 text-sm font-medium text-gray-900 hover:text-white dark:text-white bg-gradient-to-br from-purple-500 group-hover:from-purple-500 to-very-bright-pink group-hover:to-very-bright-pink rounded-lg focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800 cursor-pointer">
              <span className="relative py-2.5 px-5 bg-gray-900 group-hover:bg-gray-900/0 rounded-md transition-all duration-75 ease-in">
                View source
              </span>
            </a>
            <a className="group inline-flex overflow-hidden relative justify-center items-center self-end p-0.5 mr-2 mb-2 text-sm font-medium text-gray-900 hover:text-white dark:text-white bg-gradient-to-br from-pink-500 group-hover:from-pink-500 to-orange-400 group-hover:to-orange-400 rounded-lg focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800 cursor-pointer">
              <span className="relative py-2.5 px-5 bg-gray-900 group-hover:bg-gray-900/0 rounded-md transition-all duration-75 ease-in">
                Open project
              </span>
            </a>
          </div>
        </div>
        <ReactMarkdown className="mt-4 space-y-4">
          {project.content}
        </ReactMarkdown>
        <Footer />
      </div>
    </>
  );
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = getProjectsIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ProjectPageProps, Params> = async ({
  params,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const project = getProjectData(params!.id) as Project;
  return {
    props: {
      project,
    },
  };
};

export default Project;
