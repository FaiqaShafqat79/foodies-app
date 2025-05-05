/** @type {import('next').NextConfig} */

const repo = 'https://github.com/FaiqaShafqat79/foodies-app';
const nextConfig = {
  output: 'export',
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
}

module.exports = nextConfig
