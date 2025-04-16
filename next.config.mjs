/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/games/genshin",
        destination: "/games/genshin/characters",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
