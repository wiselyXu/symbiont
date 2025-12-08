import type { NextConfig } from 'next'

const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  /* config options here */

  // 这个配置上到 github 才打开
  output: 'export',

  // GitHub Pages 部署时用相对路径
  assetPrefix: isGithubPages ? '.' : undefined,
  basePath: isGithubPages ? '/your-symbiont-name' : '',
  trailingSlash: true,

  reactStrictMode: true,
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb'
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true,
  },

  // 上github pages 才打开下两行
 // basePath: '/symbiont',         // ← 改成你的仓库名！！！
  //assetPrefix: '/symbiont/',

 // assetPrefix: process.env.NODE_ENV === 'production' ? '.' : undefined,
}

export default nextConfig