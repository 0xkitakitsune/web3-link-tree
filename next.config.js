/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MY_NAME: process.env.MY_NAME
  }
}

module.exports = nextConfig
