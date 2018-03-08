const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCSS = new ExtractTextPlugin('styles.css')

module.exports = [
  // client settings
  {
    entry: [
      './src/index.js'
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
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          include: /styles\/.+/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              'css-loader',
              'postcss-loader'
            ],
            publicPath: '/'
          })
        }, {
          test: /\.(jpg|png|svg)$/,
          loader: 'file-loader'
        }
      ]
    },
    plugins: [
      extractCSS,
      new webpack.LoaderOptionsPlugin({
        options: {
          postcss: [
            require('postcss-import')(),
            require('autoprefixer')({
              browsers: ['last 2 versions']
            }),
            require('postcss-custom-properties')(),
            require('postcss-nested')()
          ]
        }
      })
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
          test: /\.css$/,
          include: /styles\/.+/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              'css-loader',
              'postcss-loader'
            ],
            publicPath: '/'
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
      extractCSS,
      new webpack.LoaderOptionsPlugin({
        options: {
          postcss: [
            require('postcss-import')(),
            require('autoprefixer')({
              browsers: ['last 2 versions']
            }),
            require('postcss-custom-properties')(),
            require('postcss-nested')()
          ]
        }
      })
    ]
  }
]
