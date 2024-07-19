/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  output: 'export',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
};

export default nextConfig;
