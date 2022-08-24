/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.myanimelist.net"],
  },
};

// const { withSuperjson } = require("next-superjson");

module.exports = nextConfig;
