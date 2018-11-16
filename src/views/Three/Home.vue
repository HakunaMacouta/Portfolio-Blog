<template>
  <div id="home">
    <video id="video" autoplay loop muted>
        <source src="/sintel.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
    </video>
    <terminal v-on:entry-hover="entryHovered"></terminal>
  </div>
</template>

<script>
import * as Three from '../../../node_modules/three-full/builds/Three.es.min'
import Terminal from '../../components/terminal/terminal'
import { webGL } from '../../mixins'
export default {
  name: 'home',
  mixins: [ webGL ],
  components: { Terminal },
  data: function() {
    return {
      camera: null,
      scene: new Three.Scene(),
      controls: null,
      renderer: null,
      composer: null,
      manager: new Three.LoadingManager(),
      GLTFLoader: null,
      glitch: new Three.GlitchPass(1),
      tv: null,
      statue: null,
      loading: true
    }
  },
  methods: {
    init: function() {
      this.camera = new Three.PerspectiveCamera(70, this.innerWidth / this.innerHeight, 1, 10000)
      this.scene.background = new Three.Color(this.$store.state.colors.background)
      this.scene.fog = new Three.FogExp2(this.$store.state.colors.background, 0.025)
      this.camera.position.set(0, 5, 20)
      this.controls = new Three.OrbitControls(this.camera)
      this.GLTFLoader = new Three.GLTFLoader(this.manager)
      this.renderer = this.rightRenderer({ antialias: true })
      this.renderer.setSize(this.innerWidth, this.innerHeight)
      this.$el.appendChild(this.renderer.domElement)
      window.addEventListener('resize', this.resizeWindow)
    },
    initLoading() {
      this.manager.onStart = function(url, itemsLoaded, itemsTotal) { }
      this.manager.onLoad = () => {
        this.$store.commit('loading', false)
      }
      this.manager.onProgress = function(url, itemsLoaded, itemsTotal) { }
      this.manager.onError = function(url) { }
    },
    initObjects: function() {
      this.scene.add(new Three.AmbientLight(0xffffff, 3))
      this.GLTFLoader.load('/models/Amazon/scene.gltf',
        (object) => {
          this.statue = object.scene.children[0]
          this.statue.scale.set(4, 4, 4)
          this.statue.position.y = 4
          this.scene.add(this.statue)
        })
      this.GLTFLoader.load('/models/Graces/scene.gltf',
        (object) => {
          this.statue = object.scene.children[0]
          this.statue.scale.set(0.3, 0.3, 0.3)
          this.statue.position.y = 4
          this.scene.add(this.statue)
        })
      this.GLTFLoader.load('/models/TV/scene.gltf',
        (object) => {
          this.tv = object.scene.children[0].children[0].children[0].children[0].children[0]
          console.log(this.tv)
          let video = document.getElementById('video')
          let texture = new Three.VideoTexture(video)
          texture.minFilter = Three.LinearFilter
          texture.magFilter = Three.LinearFilter
          texture.format = Three.RGBFormat
          this.tv.material = new Three.MeshBasicMaterial({ map: texture })
          this.tv.scale.set(4, 4, 4)
          this.tv.position.y = 4
          this.tv.rotation.y = -Math.PI / 7
          this.scene.add(this.tv)
        })
    },
    initShaders() {
      let effect = null
      this.composer = new Three.EffectComposer(this.renderer)
      this.composer.addPass(new Three.RenderPass(this.scene, this.camera))
      /* Film Shader */
      effect = new Three.FilmPass(0.2, 0.06, 618, false)
      effect.uniforms[ 'time' ].value = 100
      this.composer.addPass(effect)
      /* Vignette Shader */
      effect = new Three.ShaderPass(Three.VignetteShader)
      effect.uniforms[ 'offset' ].value = 1
      effect.uniforms[ 'darkness' ].value = 1.7
      // this.composer.addPass(effect)
      /* RGB Shader */
      effect = new Three.ShaderPass(Three.RGBShiftShader)
      effect.uniforms[ 'amount' ].value = 0.003
      effect.renderToScreen = true
      this.composer.addPass(effect)
      /* Glitch Shader */
      this.glitch.goWild = true
      this.composer.addPass(this.glitch)
    },
    resizeWindow: function() {
      this.camera.aspect = this.innerWidth / this.innerHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(this.innerWidth, this.innerHeight)
    },
    initFloor: function(size, division) {
      let mesh = new Three.Mesh(new Three.PlaneGeometry(size, size),
        new Three.MeshBasicMaterial({ color: this.$store.getters.floorColor.uni }))
      mesh.rotation.x = -Math.PI / 2
      mesh.position.y = -1
      this.scene.add(mesh)
      let grid = new Three.GridHelper(size, division, this.$store.getters.floorColor.centerLines, this.$store.getters.floorColor.lines)
      this.scene.add(grid)
    },
    entryHovered(entry) {
      this.glitch.renderToScreen = true
      if (!this.glitchDisplayed) {
        setTimeout(() => {
          this.glitch.renderToScreen = false
          this.glitchDisplayed = false
        }, 500)
      }
      this.glitchDisplayed = true
    },
    animate() {
      requestAnimationFrame(this.animate)
      this.camera.updateProjectionMatrix()
      this.render()
    },
    render() {
      if (this.statue) {
        this.statue.children[0].rotateOnWorldAxis(new Three.Vector3(0, 0, 1), 0.02)
      }
      this.composer.render()
      // this.renderer.render(this.scene, this.camera)
    }
  },
  computed: {
    innerWidth() {
      return this.$el.clientWidth - 40
    },
    innerHeight() {
      return this.$el.clientHeight - 40
    }
  },
  mounted() {
    this.init()
    this.initLoading()
    this.initShaders()
    this.initObjects()
    this.axesHelper(this.scene, 20)
    this.initFloor(200, 50)
    this.animate()
  }
}
</script>

<style lang="scss">
  @font-face { font-family: 'Welbut'; src: url('/fonts/welbut.ttf'); }
  * { margin:0; padding:0; }
  * { box-sizing: border-box; }
  body, html, #home { max-height:100%; height: 100%;}
  body { background: #191919 }
  /*#video { display: none }*/
  canvas {
    display: block;
    margin:20px;
    position: absolute;
  }
</style>
