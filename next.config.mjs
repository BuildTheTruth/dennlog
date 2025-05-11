/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    minimumCacheTTL: 31536000,
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'idphhmvmuywfflotbvei.supabase.co',
        pathname: '/storage/v1/object/public/**',
        port: '',
        search: '',
      },
    ],
    loader: 'custom',
    loaderFile: './src/lib/image/loader.ts',
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
