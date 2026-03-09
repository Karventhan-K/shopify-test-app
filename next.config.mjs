/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'export',        // enables static export
  trailingSlash: true,     // recommended for static hosting
  images: {
    unoptimized: true,     // required for static export
  },
  reactCompiler: true,
  reactStrictMode: true,
};

export default nextConfig;
