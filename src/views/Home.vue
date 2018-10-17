<template>
  <div id="home">
  </div>
</template>

<script>
import * as Three from '../../node_modules/three-full/builds/Three.es.min'
import { WebGL } from '../mixins'

export default {
  name: 'home',
  data: function() {
    return {
      meshes: []
    }
  },
  mixins: [WebGL],
  methods: {
    initLoading: function() {
      this.manager.onStart = function(url, itemsLoaded, itemsTotal) {
        console.log('Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.')
      }
      this.manager.onLoad = function() {
        console.log('Loading complete!')
      }
      this.manager.onProgress = function(url, itemsLoaded, itemsTotal) {
        console.log('Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.')
      }
      this.manager.onError = function(url) {
        console.log('There was an error loading ' + url)
      }
    },
    initObjects: function() {
      let light = new Three.AmbientLight(0x404040)
      this.scene.add(light)
      this.MTLLoader.load('/models/3grace/3grace.mtl', (materials) => {
        materials.preload()
        this.OBJLoader
          .setMaterials(materials)
          .load('/models/3grace/3grace.obj', (object) => {
            this.scene.add(object)
          }, null, null)
      })
    },
    /**
     * animate Three.js canvas
     */
    animate: function() {
      requestAnimationFrame(this.animate)
      this.controls.update()
      this.renderer.render(this.scene, this.camera)
    }
  },
  mounted() {
    this.init(this.$el)
    this.axesHelper(5)
    this.initLoading()
    this.initObjects()
    this.animate()
  }
}
</script>
