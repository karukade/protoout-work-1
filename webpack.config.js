const path = require('path')
const MODE = process.env.NODE_ENV || 'development'
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const isProd = process.env.NODE_ENV === 'production'
const out = path.resolve(__dirname, 'public')

module.exports = {
  mode: MODE,
  devtool: isProd ? false : '#cheap-module-source-map',
  entry: {app: './src/app.js'},
  output: {
    path: out,
    filename: '[name].js',
    chunkFilename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /.css$/,
        use: [
          'vue-style-loader', 
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}