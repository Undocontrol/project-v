<template>
  <div id="movie">
    <div class="movieWrapper">
      <h1>{{movie.original_title}}</h1>
      <img :src="imageUrl + movie.poster_path" alt=""/>
      <p>{{movie.overview}}</p>
    </div>

    <div class="addMyList">
      <a  href="#" v-on:click="addMyList">Add to My List</a>
    </div>
</div>
</template>

<script>
export default {
  name: 'movie',
  data () {
    return {
      movie: {},
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
        this.$http.get(this.baseUrl + '/movie/' + this.$route.params.id + '?api_key=' + this.apiKey).then(response => {
        this.movie = response.body
        this.loaded = false;
      });
    },
    addMyList: function () {
      this.$notify({
          group: 'favourites',
          title: 'My favourites',
          text: 'You have just added this movie to your favourites!!',
          speed: 1000
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

#movie .movieWrapper { width:50%; margin:0 auto;}
.movieWrapper h1{ margin:20px 0;}
.movieWrapper img { float:left; padding-right:40px;}

</style>
