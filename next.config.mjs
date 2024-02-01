/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        loader: 'akamai',
        path: '',
      },
    ],
  },
  assetPrefix: './',
};

/* module.exports = nextConfig;  */
export default nextConfig;
