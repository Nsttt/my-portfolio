import fs from 'fs';
import matter from 'gray-matter';

export const getPostsData = () => {
  const files = fs.readdirSync('posts');
  const allPostsData = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');

    const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf-8');

    const { data: frontmatter } = matter(fileContents);

    return {
      slug,
      title: frontmatter.title,
    };
  });

  return allPostsData;
};
