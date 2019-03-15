<template>
  <div id="moviegrid">
    <div v-show="loaded" class="loader"></div>
    <ul>
        <li v-for="item in items.results">
            <img :src="imageUrl + item.poster_path" alt="">
            <section>
                <h3>{{ item.original_title }}</h3>
                <p>{{ item.overview }}</p>
            </section>
        </li><!--
    --></ul>
</div>
</template>

<script>
export default {
  name: 'moviegrid',
  data () {
    return {
      items: [],
      baseUrl: 'https://api.themoviedb.org/3',
      apiKey: '1b62ccff88d2cd537027e1d82920197b',
      imageUrl: 'https://image.tmdb.org/t/p/w342',
      loaded: true
    }
  },
  created: function () {
    this.fetchData ();
  },
  methods: {
    // Fetch data from the API
    fetchData: function () {
      this.$http.get(this.baseUrl + '/discover/movie?api_key=' + this.apiKey + '&sort_by=popularity.desc').then(response => {
        this.items = response.body;
        this.loaded = false;
      });
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

body {
    font-family: 'Nunito', sans-serif;
}

#moviegrid {
  width:100%;
}

ul li {
  display: inline-block;
  vertical-align: top;
  width: 25vw;
  position: relative;
  overflow: hidden;
  background: black;
}
ul li:hover section {
  opacity: 1;
  transform: translate3d(0,0,0);
}
ul li:hover img {
  transform: scale(0.9);
}
ul li img {
  width: 100%;
  height: auto;
  display: block;
  transform: scale(1);
  transition: transform 350ms ease-in-out;
}
section {
  position: absolute;
  bottom: 0;
  background: #000100;
  padding: 20px;
  overflow: hidden;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  opacity: 0;
  transform: translate3d(0,10%,0);
  transition: opacity 350ms ease-in-out 150ms, transform 350ms ease-in-out 150ms;
}
section h3 {
  margin-bottom: 10px;
  font-size: 18px;
}
section p {
  line-height: 1.4;
  font-size: 15px;
}
.loader {
  position: fixed;
  z-index: 100000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #FFF;
}
.loader:after {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 20px;
  height: 20px;
  border-top: 2px solid black;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  border-left: 2px solid white;
  content: "";
  border-radius: 100px;
  animation: spin 300ms linear infinite;
}
@keyframes spin {
  .loader:after from {
    transform: rotate(0deg);
  }
  .loader:after to {
    transform: rotate(360deg);
  }
}

</style>
