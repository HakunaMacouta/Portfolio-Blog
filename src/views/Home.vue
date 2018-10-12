<template>
  <div id="home">
  </div>
</template>

<script>
import * as Three from '../../node_modules/three-full/builds/Three.es.min'
import { WebGL } from '../mixins'

export default {
  name: 'home',
  mixins: [WebGL],
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null
    }
  },
  methods: {
    init: function() {
      let container = this.$el
      this.camera = new Three.PerspectiveCamera(70, container.clientWidth / container.clientHeight, 0.01, 10)
      this.camera.position.z = 1

      // let manager = new Three.LoadingManager()
      // manager.onProgress = function(item, loaded, total) {
      //   console.log((loaded / total * 100) + '%')
      // }

      this.scene = new Three.Scene()
      // let loader = new OBJLoader(manager)
      // loader.load('@/assets/models/column.obj', (object) => {
      //   console.log('loaded')
      // })

      let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2)
      let material = new Three.MeshNormalMaterial()

      this.mesh = new Three.Mesh(geometry, material)
      this.scene.add(this.mesh)

      this.renderer = this.rightRenderer({ antialias: true })
      this.renderer.setSize(container.clientWidth, container.clientHeight)
      container.appendChild(this.renderer.domElement)
    },
    animate: function() {
      requestAnimationFrame(this.animate)
      this.mesh.rotation.x += 0.01
      this.mesh.rotation.y += 0.02
      this.renderer.render(this.scene, this.camera)
    },
    resizeWindow: function() {
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
    }
  },
  mounted() {
    this.init()
    window.addEventListener('resize', this.resizeWindow)
    this.animate()
  }
}
</script>

<style lang="scss">
  #home {
    height: 100%;
  }
</style>
