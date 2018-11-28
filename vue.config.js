// import PrerenderSPAPlugin from 'prerender-spa-plugin'
// let path = require('path')
// let PrerenderSPAPlugin = require('prerender-spa-plugin')
// const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
// let routes = ['/', '/about', '/work', '/blog']

module.exports = {
  configureWebpack: {
    plugins: [
      // new PrerenderSPAPlugin({
      //   staticDir: path.resolve(__dirname, '.', 'dist'),
      //   routes: routes,
      //   renderer: new Renderer({
      //     injectProperty: '__PRERENDER_INJECTED',
      //     inject: {
      //       prerendered: true
      //     },
      //     renderAfterDocumentEvent: 'app.rendered'
      //   })
      // })
    ]
  }
}
