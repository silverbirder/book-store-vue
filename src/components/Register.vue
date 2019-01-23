<template>
  <div>
    <md-dialog-prompt
      :md-active.sync="active"
      v-model="isbn"
      md-title="Please Input ISBN"
      md-input-maxlength="13"
      md-input-placeholder="Type isbn number..."
      md-confirm-text="Save"
      @md-cancel="onCancel"
      @md-confirm="onSave"/>
    <md-speed-dial md-direction="bottom" class="md-bottom-right">
      <md-button class="md-icon-button md-raised md-accent" @click="active = true">
        <md-icon>add</md-icon>
      </md-button>
    </md-speed-dial>
  </div>
</template>

<script>
  export default {
    name: 'Register',
    data () {
      return {
        'isbn': '',
        'BOOK_API_URL': process.env.VUE_APP_BOOK_API_URL,
        'active': false,
      }
    },
    methods: {
      onSave: function() {
        this.axios
          .get(`${this.BOOK_API_URL}/api/book/0.1/add?isbn=${this.isbn}`)
          .then(response => {alert(response.data.status)})
          .catch(response => {console.log(response)})
      },
      onCancel: function () {
        this.isbn = "";
      }
    }
  }
</script>
