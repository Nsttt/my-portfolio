export interface Post {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  content: string;
  link: string;
  source: string;
}

export type PostList = Post[];
