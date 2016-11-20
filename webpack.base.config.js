var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname,
    filename: 'build.js'
  },
  resolve: {
    // require时省略的扩展名，如：require('module') 不需要module.js
    extensions: ['', '.js'],
    // 别名
    alias: {
      vue: 'vue/dist/vue.js',
      'components': path.resolve(__dirname, '../src/components'),
      'assets': path.resolve(__dirname, '../src/assets')
    }

  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  vue: {
    loaders: {
      js: 'babel',
      // js: 'babel!eslint',
      // css: ExtractTextPlugin.extract("css"),
      // less: ExtractTextPlugin.extract("css!less"),
      // css: ExtractTextPlugin.extract('vue-style-loader', 'css'),
      // less: ExtractTextPlugin.extract('vue-style-loader', 'css!less')
      // less: ExtractTextPlugin.extract('vue-style-loader', 'css-loader', 'less-loader')

      // less: ExtractTextPlugin.extract('css!less')
      // css: ExtractTextPlugin.extract("css"),
      // less: ExtractTextPlugin.extract("css!less-loader")
      less: 'vue-style-loader!css!less'
    }
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  }
}

