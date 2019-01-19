<template>
  <div class="md-layout">
    <div class="md-layout-item">
      <md-field>
        <label>Input ISBN</label>
        <md-input v-model="isbn" class="md-size-15"></md-input>
        <span class="md-helper-text">Enter 13-digit</span>
      </md-field>
    </div>
    <div class="md-layout-item">
      <md-button class="md-raised" v-on:click="register">Register</md-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Register',
    data () {
      return {
        'isbn': '',
        'BOOK_API_URL': process.env.VUE_APP_BOOK_API_URL,
      }
    },
    methods: {
      register: function() {
        this.axios
          .get(`${this.BOOK_API_URL}/api/book/0.1/add?isbn=${this.isbn}`)
          .then(response => {alert(response.data.status)})
          .catch(response => {console.log(response)})
      }
    }
  }
</script>
