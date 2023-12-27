/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = {
  async redirects() {
    return [
      {
        source: '/apple-app-site-association', 
        destination: '/api/association',
        permanent: true
      },
    ]
  }
}
module.exports = nextConfig
