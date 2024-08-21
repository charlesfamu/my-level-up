/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['mammoth', 'openai', 'pdf-parse'],
  }
};

export default nextConfig;
