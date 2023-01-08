export interface PostFrontmatter {
  url: string;
  frontmatter: {
    slug: string;
    title: string;
    image: string;
    date: string;
    expectedReadTime: number;
    tags: string[];
  };
}
