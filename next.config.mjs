/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    // experimental: {
    //     turbopack: false,
    //   },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.optimization.splitChunks = {
          chunks: 'all',
          maxSize: 2000000, // 2MB per chunk
        };
      }
      return config;
    },
    images: {
      domains: ['localhost'],
    },
};

export default nextConfig;
