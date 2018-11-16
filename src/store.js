import Vue from 'vue'
import Vuex from 'vuex'
import { butter } from './butter'

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
      return butter.post.list({ page: 1, page_size: 10 })
        .then(function(res) {
          context.commit('blogPosts', res.data)
        }).catch(function(res) {
        })
    }
  },
  getters: {
  }
})
