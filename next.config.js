/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "media0.giphy.com",
      "media1.giphy.com",
      "media2.giphy.com",
      "media3.giphy.com",
      "media4.giphy.com",
      "static.vecteezy.com",
      "icongr.am",
    ],
  },
  env: {
    API_KEY: "AiJ0acig06H4t67PRAezErnsMcSr7jmP",
  },
};

module.exports = nextConfig;
