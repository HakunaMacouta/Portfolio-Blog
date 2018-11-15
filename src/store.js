import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: true,
    glitch: false,
    entries: {
      'about': {
        title: 'About',
        meshes: []
      },
      'blog': {
        title: 'Blog',
        meshes: []
      },
      'portfolio': {
        title: 'Portfolio',
        meshes: []
      },
      'game': {
        title: 'Game',
        meshes: []
      },
      'social': {
        title: 'Social Networks',
        meshes: []
      },
      'credit': {
        title: 'Credits',
        meshes: []
      }
    },
    colors: {
      background: 0x191919,
      floor: {
        uni: 0xf0f0f0,
        centerLines: 0x444444,
        lines: 0x888888
      }
    }
  },
  mutations: {
    addMesh(state, payload) {
      state.entries[payload.entry].meshes.push(payload.mesh)
    },
    loading(state, payload) {
      state.loading = payload
    }
  },
  actions: {

  },
  getters: {
    floorColor: state => {
      return state.colors.floor
    }
  }
})
