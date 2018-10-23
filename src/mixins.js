import {
  Scene, Color, PerspectiveCamera,
  WebGLRenderer, CanvasRenderer, LoadingManager, OBJLoader, MTLLoader,
  AxesHelper, GridHelper, OrbitControls,
  EffectComposer, RenderPass
} from '../node_modules/three-full/builds/Three.es.min'

let WebGL = {
  data: function() {
    return {
      camera: null,
      scene: new Scene(),
      controls: null,
      renderer: null,
      composer: null,
      manager: new LoadingManager(),
      OBJLoader: null,
      MTLLoader: null
    }
  },
  methods: {


  }
}

export { WebGL }
