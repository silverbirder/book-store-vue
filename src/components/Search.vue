<template>
  <ais-index
    :app-id="APP_ID"
    :api-key="API_KEY"
    :index-name="INDEX_NAME"
  >
    <div class="md-field">
      <ais-input placeholder="Find books..." class="md-input" autofocus></ais-input>
    </div>
    <ais-results class="md-layout md-gutter md-alignment-center">
      <template slot-scope="{ result }">
        <md-card class="md-layout-item md-medium-size-10 md-small-size-25 md-xsmall-size-50">
          <md-card-area md-inset>
            <md-card-media>
              <img :src="result.cover">
            </md-card-media>

            <md-card-header>
              <div class="md-title">{{ result.title }}</div>
              <div class="md-subhead">{{ result.author }}</div>
            </md-card-header>

            <md-card-content>
               {{ result.publisher}}, {{ result.pubdate }}
            </md-card-content>

            <md-card-expand>
              <md-card-actions md-alignment="space-between">
                <div>
                  <md-button>Edit</md-button>
                </div>
                <md-card-expand-trigger>
                  <md-button class="md-icon-button">
                    <md-icon>keyboard_arrow_down</md-icon>
                  </md-button>
                </md-card-expand-trigger>
              </md-card-actions>
              <md-card-expand-content>
                <md-card-content>
                  {{ result.textContent[0].Text }}
                </md-card-content>
              </md-card-expand-content>
            </md-card-expand>

          </md-card-area>
        </md-card>
      </template>
    </ais-results>
    <ais-no-results>
      <template slot-scope="props">
        No products found for <i>{{ props.query }}</i>.
      </template>
    </ais-no-results>
  </ais-index>
</template>

<script>
  export default {
    name: 'Search',
    data () {
      return {
        'APP_ID': process.env.VUE_APP_ALGOLIA_APP_KEY,
        'API_KEY': process.env.VUE_APP_ALGOLIA_SEARCH_KEY,
        'INDEX_NAME': process.env.VUE_APP_ALGOLIA_INDEX_KEY
      }
    },
  }
</script>
