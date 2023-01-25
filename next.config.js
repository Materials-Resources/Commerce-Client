/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "tailwindui.com",
      "imagedelivery.net",
      "images.unsplash.com",
      "pub-9b0dea0c4c33447d8e80a3da4716fb7d.r2.dev",
    ],
  },
};

module.exports = nextConfig;
