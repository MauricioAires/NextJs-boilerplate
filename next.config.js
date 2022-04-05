// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    disable: false,
    // dest: 'public', // comment out this line
    // scope: 'public', // comment out this line
    register: true,
    sw: '/sw.js'
  }
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
}

module.exports = nextConfig
