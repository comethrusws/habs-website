const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  chainWebpack: config => {
    config.module
      .rule('pdf')
      .test(/\.(pdf)(\?.*)?$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'files/[name].[hash:8].[ext]' // Adjust the output path and filename as needed
      })
      .end();
  }
});
