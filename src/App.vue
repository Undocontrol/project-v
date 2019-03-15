<template>
  <div id="app">
    <notifications group="favourites" position="top center" />
    <img src="./assets/logo.png" class="logo">
    <navigation></navigation>
    <router-view/>
  </div>
</template>

<script>
import navigation from '@/components/navigation'
import router from './router'

export default {
  components: {
    navigation
  },
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app .logo {
    width:200px;
    height:150px;
}
</style>
