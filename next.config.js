/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GOOGLE_CLIENT_ID: '486693633260-5h0a0r0sqnq22kdgjt7icf01snvmq28s.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET: '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',
    NEXTAUTH_URL: 'http://localhost:3000',
    NEXTAUTH_SECRET: '1d60cbb66c5e7140d8a272e03a9eb9b6',
    SERVER_URL: 'https://bitesized.creatogether.io'
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
