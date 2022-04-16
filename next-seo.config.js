const SEO = {
  defaultTitle: 'NstLopez | Néstor López Frontend Engineer',
  titleTemplate: '%s | NstLopez',
  description:
    'Articles and projects about software and web development and ocasional rants about life.',
  canonical: 'https://nstlopez.com',
  images: [
    {
      rel: 'apple-touch-icon',
      href: './public/apple-touch-icon.png',
      sizes: '76x76',
    },
    {
      rel: 'android-chrome-192x192',
      href: './public/android-chrome-192x192.png',
      sizes: '192x192',
    },
    {
      rel: 'android-chrome-256x256',
      href: './public/android-chrome-256x256.png',
      sizes: '256x256',
    },
    {
      rel: 'android-chrome-512x512',
      href: './public/android-chrome-512x512.png',
      sizes: '512x512',
    },
  ],
  openGraph: {
    url: 'http://nstlopez.com',
    title: 'NstLopez | Néstor López Frontend Engineer',
    description:
      'Articles and projects about software and web development and ocasional rants about life.',
    images: [
      {
        url: './public/og.png',
        width: 800,
        height: 800,
        alt: 'OG Logo',
      },
    ],
  },
  twitter: {
    handle: '@nstlopez',
    site: '@nstlopez',
    cardType: 'summary_large_image',
  },
};

export default SEO;
