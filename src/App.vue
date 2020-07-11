<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'

require('./common.js')

export default {
  name: 'App',
  components: { Header }
}
</script>

<style lang="scss">
@import './css/reset.css';

body {
  background-color: #000;
  color: white;
}

button {
  display: block;
  background-color: black;
  color: white;
  border: 1px solid white;
  outline:none;
  @media (min-width: 768px) {
    &:hover {
      cursor: pointer;
      color: black;
      background-color: white;
    }
  }
}
</style>
