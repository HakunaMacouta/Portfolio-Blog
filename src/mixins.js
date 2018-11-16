import { WebGLRenderer, CanvasRenderer, AxesHelper } from '../node_modules/three-full/builds/Three.es.min'
let webGL = {
  methods: {
    rightRenderer: function(parameters) {
      let canvas = document.createElement('canvas')

      let gl = canvas.getContext('webgl') ||
        canvas.getContext('experimental-webgl')

      return gl && gl instanceof WebGLRenderingContext
        ? new WebGLRenderer(parameters)
        : new CanvasRenderer(parameters)
    },
    axesHelper: function(node, size) {
      node.add(new AxesHelper(size))
    }
  }
}

export { webGL }
