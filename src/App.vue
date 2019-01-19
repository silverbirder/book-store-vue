<template>
  <div id="app">
    <Register/>
    <Search/>
  </div>
</template>

<script>
import Search from './components/Search'
import Register from './components/Register'

export default {
  name: 'App',
  components: {
    Search,
    Register
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
