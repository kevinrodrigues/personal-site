module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /particles\.js/,
          use: 'exports-loader?particlesJS=window.particlesJS,pJSDom=window.pJSDom'
        }
      ]
    }
  }
}