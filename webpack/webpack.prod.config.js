const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = [
  // client settings
  {
    entry: './src/client.js',
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
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin({
        filename: 'styles.css',
        disable: false,
        allChunks: true
      }),
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
    entry: './src/server.js',
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
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin({
        filename: 'styles.css',
        disable: false,
        allChunks: true
      }),
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
