import axios from 'axios';
import VueAxios from 'vue-axios';

import 'bootstrap';
import { $ } from 'jquery';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

import { VueMasonryPlugin } from 'vue-masonry';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VueAxios, axios);

window.$ = $;

Vue.component('Loading', Loading);

Vue.component('VueSlickCarousel', VueSlickCarousel);

Vue.use(VueMasonryPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
