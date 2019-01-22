'use strict'
module.exports = {
  NODE_ENV: '"production"',
  VUE_APP_ALGOLIA_INDEX_KEY: '"'+process.env.ALGOLIA_INDEX_KEY+'"',
  VUE_APP_ALGOLIA_APP_KEY: '"'+process.env.ALGOLIA_APP_KEY+'"',
  VUE_APP_ALGOLIA_SEARCH_KEY: '"'+process.env.ALGOLIA_SEARCH_KEY+'"',
  VUE_APP_BOOK_API_URL: '"https://book-store-go.now.sh"'
}
