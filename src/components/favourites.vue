<template>
  <div id="favourites">
    <div class="myList">
      {{ $store.state.count }}
    </div>
</div>
</template>

<script>
export default {
  name: 'movie',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped type="stylesheet/less">
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

</style>
