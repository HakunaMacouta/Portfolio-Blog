import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    networks: [
      { path: 'img/networks/github.svg',
        url: 'https://github.com/Macouta',
        alt: 'github' },
      { path: 'img/networks/itchio.svg',
        url: 'https://macouta.itch.io',
        alt: 'itchio' },
      { path: 'img/networks/linkedin.svg',
        url: 'https://www.linkedin.com/in/thomas-blanc/',
        alt: 'linkedin' },
      { path: 'img/networks/twitter.svg',
        url: 'https://twitter.com/macouta_',
        alt: 'twitter' }
    ],
    posts: []
  },
  mutations: {
    blogPosts(state) {
      state.posts = 1
    }
  },
  actions: {
    blogPosts(context) {
      context.commit('blogPosts')
    }
  },
  getters: {
  }
})
