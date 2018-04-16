const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [
      'babel-polyfill',
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3001',
      'webpack/hot/only-dev-server',
      './src/main'
    ]
  },
  output: {
    path: path.join(__dirname, 'public', 'build'),
    filename: '[name].js',
    publicPath: '/'
  },
  performance: {
    hints: false
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify('development') } }),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template : 'src/index.html',
      hash     : false,
      favicon  : 'public/favicon.png',
      filename : 'index.html',
      inject   : 'body',
      minify   : {
        collapseWhitespace : true
      }
    }),
    new CopyWebpackPlugin([{ from: 'public/' }])
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    compress: true,
    historyApiFallback: true,
    port: 3001,
    proxy: {
      '/api': {
        target: 'http://localhost:3002',
        secure: false
      }
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/, // both .js and .jsx
        loader: 'eslint-loader',
        include: path.resolve(process.cwd(), 'src'),
        enforce: 'pre'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
        include: [__dirname]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          }, {
            loader: 'css-loader'   // translates CSS into CommonJS
          }, {
            loader: 'sass-loader'  // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      { test: /webfont\.svg$/, loader: 'url-loader?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]' },
      { test: /webfont\.woff$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]' },
      { test: /webfont\.woff2$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]' },
      { test: /webfont\.[ot]tf$/, loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]' },
      { test: /webfont\.eot$/, loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]' }  ]
  }
}
