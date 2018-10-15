import { Scene, PerspectiveCamera, WebGLRenderer, CanvasRenderer, LoadingManager, OBJLoader, MTLLoader, AxesHelper } from '../node_modules/three-full/builds/Three.es.min'

let WebGL = {
  data: function() {
    return {
      camera: null,
      scene: new Scene(),
      renderer: null,
      manager: new LoadingManager(),
      OBJLoader: null,
      MTLLoader: null
    }
  },
  methods: {
    /**
     * initialize Three.js canvas
     * @param container
     */
    init: function(container) {
      this.camera = new PerspectiveCamera(70, container.clientWidth / container.clientHeight, 1, 10000)
      this.camera.position.set(0, 20, 100)
      this.OBJLoader = new OBJLoader(this.manager)
      this.MTLLoader = new MTLLoader(this.manager)
      this.renderer = this.rightRenderer({ antialias: true })
      this.renderer.setSize(container.clientWidth, container.clientHeight)
      container.appendChild(this.renderer.domElement)
      window.addEventListener('resize', this.resizeWindow)
    },
    /**
     * Update window size when resized
     */
    resizeWindow: function() {
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
    },
    /**
     * return right renderer if webgl is enabled in browser
     * @param parameters
     * @returns {WebGLRenderer, CanvasRenderer}
     */
    rightRenderer: function(parameters) {
      let canvas = document.createElement('canvas')

      let gl = canvas.getContext('webgl') ||
        canvas.getContext('experimental-webgl')

      return gl && gl instanceof WebGLRenderingContext
        ? new WebGLRenderer(parameters)
        : new CanvasRenderer(parameters)
    },
    axesHelper: function(size) {
      this.scene.add(new AxesHelper(size))
    }
  }
}

export { WebGL }
