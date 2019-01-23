<template>
  <ais-index
    :app-id="APP_ID"
    :api-key="API_KEY"
    :index-name="INDEX_NAME"
  >
    <div class="md-field">
      <md-field>
        <ais-input placeholder="Find books..." class="md-input" autofocus></ais-input>
      </md-field>
    </div>
    <ais-results class="md-layout md-gutter md-alignment-center">
      <template slot-scope="{ result }">
        <md-card class="md-layout-item md-size-10 md-small-size-25 md-xsmall-size-50">
          <md-card-area md-inset>
            <md-card-media>
              <a :href="AMAZON_DP_URL + '/' + isbn13to10(result.isbn)" target="_blank">
                <img :src="result.cover ? result.cover : NO_IMAGE_URL ">
              </a>
            </md-card-media>

            <md-card-header>
              <div class="md-title">{{ result.title }}</div>
              <div class="md-subhead">{{ result.author }}</div>
            </md-card-header>

            <md-card-content>
               {{ result.publisher }}, {{ result.pubdate }}
            </md-card-content>

            <md-card-expand>
              <md-card-actions md-alignment="space-between">
                <div>
                  <md-button @click="onShowDialog(result)">Edit</md-button>
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
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Book Edit</md-dialog-title>
      <md-dialog-content>
        <md-table>
          <md-table-row>
            <md-table-head>author</md-table-head>
            <md-table-cell>
              <md-field>
                <md-input  v-model="dialog.author"></md-input>
              </md-field>
            </md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-head md-numeric>isbn</md-table-head>
            <md-table-cell>
              <md-field>
                <md-input  v-model="dialog.isbn"></md-input>
              </md-field>
            </md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-head>publisher</md-table-head>
            <md-table-cell>
              <md-field>
                <md-input  v-model="dialog.publisher"></md-input>
              </md-field>
            </md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-head>title</md-table-head>
            <md-table-cell>
              <md-field>
                <md-input  v-model="dialog.title"></md-input>
              </md-field>
            </md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-head>cover</md-table-head>
            <md-table-cell>
              <md-field>
                <md-input  v-model="dialog.cover"></md-input>
              </md-field>
            </md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-head>pubdate</md-table-head>
            <md-table-cell>
              <md-field>
                <md-input  v-model="dialog.pubdate"></md-input>
              </md-field>
            </md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-head>series</md-table-head>
            <md-table-cell>
              <md-field>
                <md-input  v-model="dialog.series"></md-input>
              </md-field>
            </md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-head>volume</md-table-head>
            <md-table-cell>
              <md-field>
                <md-input  v-model="dialog.volume"></md-input>
              </md-field>
            </md-table-cell>
          </md-table-row>
        </md-table>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Close</md-button>
        <md-button class="md-primary" @click="onUpdate(dialog)">Save</md-button>
      </md-dialog-actions>
    </md-dialog>
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
        'NO_IMAGE_URL': process.env.VUE_APP_NO_IMAGE_URL,
        'AMAZON_DP_URL': process.env.VUE_APP_AMAZON_DP_URL,
        'showDialog': false,
        'dialog': {
          'author': '',
          'isbn': '',
          'publisher': '',
          'title': '',
          'cover': '',
          'series': '',
          'volume': '',
          'objectId': '',
        }
      }
    },
    methods: {
      isbn13to10: function(isbn13) {
        isbn13 += "";
        let digits = isbn13.substr(3,9).split("") ;
        let sum = 0; let chk_tmp, chk_digit;
        for(var i = 0; i < 9; i++) {
          sum += digits[i] * (10 - i);
        }
        chk_tmp= 11 - (sum % 11);
        if (chk_tmp == 10) {
          chk_digit = 'x';
        } else if (chk_tmp == 11) {
          chk_digit = 0;
        } else {
          chk_digit = chk_tmp;
        }
        digits.push(chk_digit);
        return digits.join("");
      },
      onShowDialog: function (result) {
        this.dialog.author = result.author;
        this.dialog.isbn = result.isbn;
        this.dialog.publisher = result.publisher;
        this.dialog.title = result.title;
        this.dialog.cover = result.cover;
        this.dialog.pubdate = result.pubdate;
        this.dialog.series = result.series;
        this.dialog.volume = result.volume;
        this.dialog.objectId = result.objectID;
        this.showDialog = true;
      },
      onUpdate: function(dialog) {
        this.axios
          .post(`${this.BOOK_API_URL}/api/book/0.1/update`, dialog)
          .then(response => {alert(response.data.status); this.showDialog = false;})
          .catch(response => {console.log(response); this.showDialog = false;})
      }
    }
  }
</script>
<style lang="scss" scoped>
  .md-layout-item {
    overflow: hidden;
    &:after {
      width: 100%;
      height: 100%;
      display: block;
      content: " ";
    }
  }
  .md-card .md-card-header {
    overflow: hidden;
  }
  .md-card .md-card-header .md-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
