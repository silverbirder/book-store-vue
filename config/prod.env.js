'use strict'
module.exports = {
  NODE_ENV: '"production"',
  VUE_APP_ALGOLIA_INDEX_KEY: '"'+process.env.ALGOLIA_INDEX_KEY+'"',
  VUE_APP_ALGOLIA_APP_KEY: '"'+process.env.ALGOLIA_APP_KEY+'"',
  VUE_APP_ALGOLIA_SEARCH_KEY: '"'+process.env.ALGOLIA_SEARCH_KEY+'"',
  VUE_APP_BOOK_API_URL: '"https://book-store-go.now.sh"',
  VUE_APP_NO_IMAGE_URL: '"https://res.cloudinary.com/silverbirder/image/upload/v1548200876/no-image.png"',
  VUE_APP_AMAZON_DP_URL: '"https://www.amazon.co.jp/dp"'
}
