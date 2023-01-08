export interface ProjectFrontmatter {
  url: string;
  frontmatter: {
    title: string;
    slug: string;
    image: string;
    description: string;
    date: string;
    link: string;
    source: string;
    tags: string[];
  };
}
