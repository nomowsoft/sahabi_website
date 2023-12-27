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
