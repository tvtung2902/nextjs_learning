import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true,
      }
    ]
  },
  
  rewrites: async () => {
    return [
      {
        source: '/:path*',
        destination: '/middleware',
      }
    ]
  },
}
 
export default nextConfig