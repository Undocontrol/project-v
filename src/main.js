// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import Notifications from 'vue-notification'
import VueResource from 'vue-resource'
import VueCarousel from 'vue-carousel'
Vue.use(VueResource);
Vue.use(VueCarousel);
Vue.use(Notifications);
Vue.use(Vuex);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
