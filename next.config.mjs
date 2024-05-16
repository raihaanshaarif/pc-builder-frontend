/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
  },
  eslint: {
    ignoreDuringBuilds:true,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', 
      },
      {
        protocol: 'https',
        hostname: 'trusttechspace.blr1.cdn.digitaloceanspaces.com'
      }
    ],
  },
};

export default nextConfig;
