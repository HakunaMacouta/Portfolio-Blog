import Vue from 'vue'
import Vuex from 'vuex'
import butter from './config/butter'

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
    posts: [],
    categories: [],
    tags: []
  },
  mutations: {
    blogPosts(state, posts) {
      state.posts = posts
    },
    blogCategories(state, categories) {
      state.categories = categories
    },
    blogTags(state, tags) {
      state.tags = tags
    }
  },
  actions: {
    blogPosts(context) {
      return butter.post.list({ page: 1, page_size: 10, exclude_body: true })
        .then(function(res) {
          context.commit('blogPosts', res.data.data)
        }).catch(function(res) {
          // TODO
        })
    },
    blogCategories(context) {
      return butter.category.list()
        .then(function(res) {
          context.commit('blogCategories', res.data.data)
        }).catch(function(res) {
          // TODO
        })
    },
    blogTags(context) {
      return butter.tag.list()
        .then(function(res) {
          context.commit('blogTags', res.data.data)
        }).catch(function(res) {
          // TODO
        })
    }
  },
  getters: {
  }
})
