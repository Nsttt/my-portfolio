import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const files = fs.readdirSync('public/projects');

export const getAllProjectsData = () => {
  const allPostsData = files.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fileContents = fs.readFileSync(
      `public/projects/${fileName}`,
      'utf-8'
    );

    const { data, content } = matter(fileContents);

    return {
      id,
      title: data.title,
      subtitle: data.subtitle,
      description: data.description,
      date: data.date,
      link: data.link,
      source: data.source,
      content: content,
    };
  });

  return allPostsData;
};

export const getDisplayProjectsData = () => {
  return getAllProjectsData().slice(0, 3);
};

export const getProjectsIds = () => {
  return files.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
};

export const getProjectData = (id: string) => {
  const fullPath = path.join('public/projects', `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);

  return {
    id,
    title: data.title,
    subtitle: data.subtitle,
    description: data.description,
    date: data.date,
    content: content,
  };
};
