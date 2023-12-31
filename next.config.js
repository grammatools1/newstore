const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

module.exports = withStoreConfig({
  experimental: {
    serverActions: true,
  },
  features: store.features,
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [
      "medusa-public-images.s3.eu-west-1.amazonaws.com",
      "localhost",
      "medusa-server-testing.s3.amazonaws.com",
      "https://minio.stylishslacks.cfd",
    ],
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
