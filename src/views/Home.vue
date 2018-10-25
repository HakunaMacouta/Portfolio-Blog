<template>
  <div id="home">
    <terminal v-on:entry-hover="entryHovered"></terminal>
  </div>
</template>

<script>
import * as Three from '../../node_modules/three-full/builds/Three.es.min'
import Terminal from '../components/Terminal'
export default {
  name: 'home',
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
      glitch: new Three.GlitchPass(),
      glitchDisplayed: false,
      object: null
    }
  },
  methods: {
    init: function() {
      this.camera = new Three.PerspectiveCamera(70, this.innerWidth / this.innerHeight, 1, 10000)
      this.scene.background = new Three.Color(0xf0f0f0)
      this.camera.position.set(0, 5, 20)
      this.controls = new Three.OrbitControls(this.camera)
      this.GLTFLoader = new Three.GLTFLoader(this.manager)
      this.renderer = this.rightRenderer({ antialias: true })
      this.renderer.setSize(this.innerWidth, this.innerHeight)
      this.$el.appendChild(this.renderer.domElement)
      window.addEventListener('resize', this.resizeWindow)
      this.scene.fog = new Three.FogExp2(0x191919, 0.0128)
      this.renderer.setClearColor(0x000000)
    },
    initLoading() {
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
      this.scene.add(new Three.AmbientLight(0xffffff))
      this.GLTFLoader.load('/models/wounded_amazon/scene.gltf',
        (object) => {
          this.object = object.scene.children[0]
          this.object.scale.set(4, 4, 4)
          this.object.position.y = 4
          this.scene.add(this.object)
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
      this.composer.addPass(effect)
      /* RGB Shader */
      effect = new Three.ShaderPass(Three.RGBShiftShader)
      effect.uniforms[ 'amount' ].value = 0.0015
      effect.renderToScreen = true
      this.composer.addPass(effect)
      /* Glitch Shader */
      this.glitch.goWild = true
      this.composer.addPass(this.glitch)
    },
    resizeWindow: function() {
      console.log('ResizeWindow')
      this.camera.aspect = this.innerWidth / this.innerHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(this.innerWidth, this.innerHeight)
    },
    rightRenderer: function(parameters) {
      let canvas = document.createElement('canvas')

      let gl = canvas.getContext('webgl') ||
        canvas.getContext('experimental-webgl')

      return gl && gl instanceof WebGLRenderingContext
        ? new Three.WebGLRenderer(parameters)
        : new Three.CanvasRenderer(parameters)
    },
    axesHelper: function(size) {
      this.scene.add(new Three.AxesHelper(size))
    },
    gridHelper: function(size, division) {
      this.scene.add(new Three.GridHelper(size, division))
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
      if (this.object) {
        this.object.children[0].rotateOnWorldAxis(new Three.Vector3(0, 0, 1), 0.02)
      }
      // this.composer.render()
      this.renderer.render(this.scene, this.camera)
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
    this.initShaders()
    this.initObjects()
    // this.axesHelper(20)
    this.gridHelper(800, 200)
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
  canvas {
    display: block;
    margin:20px;
    position: absolute;
  }
</style>
