/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",  // builds single page app (SPA) only, no server-side
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
