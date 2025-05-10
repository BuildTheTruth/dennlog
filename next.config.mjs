/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'idphhmvmuywfflotbvei.supabase.co',
        port: '',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/games/genshin',
        destination: '/games/genshin/characters',
        permanent: true,
      },
      {
        source: '/games/wutheringwaves',
        destination: '/games/wutheringwaves/characters',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
