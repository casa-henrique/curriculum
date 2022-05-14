/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  strictMode: true,
  env: {
    BASE_URL: process.env.API_TOKEN_URL,
  },
};

module.exports = nextConfig;
