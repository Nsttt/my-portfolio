import fs from 'fs';
import { Feed } from 'feed';

import { getAllPostsData } from './getPosts';

export const generateRssFeed = async () => {
  const posts = getAllPostsData();
  const date = new Date();
  const author = {
    name: 'Néstor López',
    email: 'nestor@nstlopez.com',
    link: 'https://twitter.com/nstlopez',
  };
  const siteUrl = 'https://nstlopez.com';

  const feed = new Feed({
    title: 'Nstlopez Blog',
    description: '',
    id: siteUrl,
    link: siteUrl,
    updated: date,
    copyright: `All rights reserved ${date.getFullYear()}, Néstor López`,
    feedLinks: {
      rss2: `${siteUrl}/rss/feed.xml`,
      json: `${siteUrl}/rss/feed.json`,
      atom: `${siteUrl}/rss/atom.xml`,
    },
    author,
  });

  posts.forEach((post) => {
    const url = `${siteUrl}/blog/${post.id}`;

    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.description,
      content: post.content,
      date: new Date(post.date),
    });
  });

  fs.mkdirSync('public/rss', { recursive: true });
  fs.writeFileSync('public/rss/feed.xml', feed.rss2());
  fs.writeFileSync('public/rss/feed.json', feed.json1());
  fs.writeFileSync('public/rss/atom.xml', feed.atom1());
};
