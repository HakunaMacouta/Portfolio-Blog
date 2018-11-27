

webpack
webpackConfig.plugins.push(
  new PrerenderSPAPlugin({
    staticDir: path.resolve(__dirname, '..', 'dist'),
    routes: routes,
    renderer: new Renderer({
      injectProperty: '__PRERENDER_INJECTED',
      inject: {
        prerendered: true
      },
      renderAfterDocumentEvent: 'app.rendered'
    })
  }));
