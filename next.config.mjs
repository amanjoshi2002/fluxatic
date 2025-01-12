/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // or 'export' for static sites
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aceternity.com',
      },
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
      },
    ],
  },
};

export default nextConfig;