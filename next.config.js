/** @type {import('next').NextConfig} */

const repo = 'foodies-app';
const nextConfig = {
  output: 'export',
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
}

module.exports = nextConfig
