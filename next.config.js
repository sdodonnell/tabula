const nextConfig = {
    experimental: {
        serverActions: true
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'flowbite.s3.amazonaws.com',
          },
        ],
      },
};

module.exports = nextConfig;
