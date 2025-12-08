import type { NextConfig } from 'next'

const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {

  output: 'export',

  // GitHub Pages 部署时用相对路径
  assetPrefix: isGithubPages ? '/symbiont/' : undefined,
  basePath: isGithubPages ? '/symbiont' : '',
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

}

export default nextConfig


  // 上github pages 才打开下两行
 // basePath: '/symbiont',         // ← 改成你的仓库名！！！
  //assetPrefix: '/symbiont/',

 // assetPrefix: process.env.NODE_ENV === 'production' ? '.' : undefined,
   /* config options here */

  // 这个配置上到 github 才打开