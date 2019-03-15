import Vue from 'vue'
import Router from 'vue-router'
import moviecarousel from '@/components/moviecarousel'
import comedy from '@/components/comedy'
import drama from '@/components/drama'
import entertainment from '@/components/entertainment'
import lifestyle from '@/components/lifestyle'
import factual from '@/components/factual'
import movie from '@/components/movie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'moviecarousel',
      component: moviecarousel
    },
    {
      path: '/comedy',
      name: 'comedy',
      component: comedy
    },
    {
      path: '/drama',
      name: 'drama',
      component: drama
    },
    {
      path: '/entertainment',
      name: 'entertainment',
      component: entertainment
    },
    {
      path: '/lifestyle',
      name: 'lifestyle',
      component: lifestyle
    },
    {
      path: '/factual',
      name: 'factual',
      component: factual
    },
    {
      path: '/movie/:id', 
      name: 'movie', 
      component: movie
    } 

  ]
})

