// @ts-check
import withPlaiceholder from "@plaiceholder/next";
/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ["@plaiceholder/ui"],
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'images.pexels.com',
      port: '',
      pathname: '/photos/**'
    }]
  }
}

export default withPlaiceholder(nextConfig);
