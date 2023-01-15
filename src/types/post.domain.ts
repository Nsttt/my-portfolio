export interface PostFrontmatter {
  url: string;
  frontmatter: {
    slug: string;
    title: string;
    description: string;
    image: string;
    pubDate: string;
    readingTime: string;
    tags: string[];
  };
}
