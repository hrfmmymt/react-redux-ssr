const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = [
  // client settings
  {
    entry: [
      './src/client.js'
    ],
    output: {
      path: path.join(__dirname, '..', 'public'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.s?css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  importLoaders: 1,
                  sourceMap: true,
                  localIdentName: '[name]__[local]___[hash:base64:5]'
                }
              },
              'postcss-loader',
              'sass-loader'
            ]
          })
        },
        {
          test: /\.(jpg|png|svg)$/,
          loader: 'file-loader'
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('styles.css')
    ]
  },

  // server settings
  {
    entry: [
      './src/server.js'
    ],
    target: 'node',
    node: {
      __dirname: false,
      __filename: false
    },
    output: {
      path: path.join(__dirname, '..', 'dist'),
      filename: 'server.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.s?css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  importLoaders: 1,
                  sourceMap: true,
                  localIdentName: '[name]__[local]___[hash:base64:5]'
                }
              },
              'postcss-loader',
              'sass-loader'
            ]
          })
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        }, {
          test: /\.(jpg|png|svg)$/,
          loader: 'file-loader'
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('styles.css')
    ]
  }
]
