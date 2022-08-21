import { withPlausibleProxy } from 'next-plausible';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
};

export default withPlausibleProxy()(nextConfig);
