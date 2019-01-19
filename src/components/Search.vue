<template>
  <ais-index
    :app-id="APP_ID"
    :api-key="API_KEY"
    :index-name="INDEX_NAME"
  >
    <ais-search-box></ais-search-box>
    <ais-results>
      <template slot-scope="{ result }">
        <h2>
          <ais-highlight :result="result" attribute-name="title"></ais-highlight>
        </h2>
      </template>
    </ais-results>
  </ais-index>
</template>

<script>
  export default {
    name: 'Search',
    data () {
      return {
        'APP_ID': process.env.VUE_APP_ALGOLIA_APP_KEY,
        'API_KEY': process.env.VUE_APP_ALGOLIA_SEARCH_KEY,
        'INDEX_NAME': process.env.VUE_APP_ALGOLIA_INDEX_KEY,
      }
    }
  }
</script>
