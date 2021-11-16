module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "~@/styles/variables.scss";'
      }
    }
  },
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ],
  devServer: {
    proxy: {
      '/boss': {
        target: 'http://eduboss.lagou.com',
        changeOrigin: true
      },
      '/front': {
        target: 'http://edufront.lagou.com',
        changeOrigin: true
      }
    }
  }
}
