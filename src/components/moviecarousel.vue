<template>
  <carousel>
    <slide class="slide" v-for="item in items.results">
      <router-link :to="{name: 'movie', params: { id: item.id }}">
        <img :src="imageUrl + item.poster_path" alt=""/>
        <section>
          <h3>{{ item.original_title }}</h3>
          <p>{{ item.overview }}</p>   
        </section>
      </router-link>
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  name: 'moviecarousel',
  data () {
    return {
      items: [],
      baseUrl: 'https://api.themoviedb.org/3',
      apiKey: '1b62ccff88d2cd537027e1d82920197b',
      imageUrl: 'https://image.tmdb.org/t/p/w342',
      loaded: true
    }
  },
  components: {
    Carousel,
    Slide
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
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

a:hover {
  cursor:pointer;
}

.slide {
  display: inline-block;
  vertical-align: top;
  position: relative;
  overflow: hidden;
  background: black;
}
.slide:hover section {
  opacity: 1;
  transform: translate3d(0,0,0);
}
.slide:hover img {
  transform: scale(0.9);
}
.slide img {
  height: auto;
  display: block;
  transform: scale(1);
  transition: transform 350ms ease-in-out;
}
section {
  position: absolute;
  bottom: 0;
  background: #000100;
  overflow: hidden;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  opacity: 0;
  transform: translate3d(0,10%,0);
  transition: opacity 350ms ease-in-out 150ms, transform 350ms ease-in-out 150ms;
  color:#fff;
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
