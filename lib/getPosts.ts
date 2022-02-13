import fs from 'fs';
import matter from 'gray-matter';

export const getPostsData = () => {
  const files = fs.readdirSync('posts');
  const allPostsData = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');

    const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf-8');

    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      subtitle: data.subtitle,
      description: data.description,
      date: data.date,
      content: content,
    };
  });

  return allPostsData;
};
