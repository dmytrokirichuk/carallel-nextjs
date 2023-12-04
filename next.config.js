/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    appDir: true,
  },
  images: {
    domains: ["carallel.com"],
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/auth/signIn",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
