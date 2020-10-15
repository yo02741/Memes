import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    isLoading: false,
    memes: [],
    memesSlick: [1, 2, 3, 4, 5, 6],
  },
  actions: {
    getData(context) {
      context.commit('LOADING', true);
      context.commit('MEMES', '');
      axios.get('https://api.imgflip.com/get_memes')
        .then((res) => {
          context.commit('LOADING', false);
          context.commit('MEMES', res.data.data.memes);
          context.commit('SLICKCAROUSEL', res.data.data.memes);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mutations: {
    LOADING(state, payload) {
      state.isLoading = payload;
    },
    MEMES(state, payload) {
      state.memes = payload;
    },
    SLICKCAROUSEL(state, payload) {
      let str = 0;
      const tempPayload = Object.assign([], payload);
      state.memesSlick = [];

      for (let i = 0; i < 12; i += 1) {
        str = Math.round(Math.random() * tempPayload.length - 1);
        state.memesSlick.push(tempPayload[str]);
        tempPayload.splice(str, 1);
      }
    },
  },
  modules: {
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
    memes(state) {
      return state.memes;
    },
    memesSlick(state) {
      return state.memesSlick;
    },
  },
});
