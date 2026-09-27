/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      // Sanity asset CDN domains
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "images.sanitycdn.com" },
    ],
  },
};
export default nextConfig;
