import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    networks: [
      { path: 'github.svg',
        url: 'https://github.com/HakunaMacouta',
        alt: 'github' },
      { path: 'itchio.svg',
        url: 'https://macouta.itch.io',
        alt: 'itchio' },
      { path: 'linkedin.svg',
        url: 'https://www.linkedin.com/in/thomas-blanc/',
        alt: 'linkedin' },
      { path: 'twitter.svg',
        url: 'https://twitter.com/macouta_',
        alt: 'twitter' }
    ]
  },
  mutations: {
  },
  actions: {

  },
  getters: {
  }
})
