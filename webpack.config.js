const path = require('path')
const webpack = require('webpack')
const DashboardPlugin = require('webpack-dashboard/plugin')
const qs = require('qs')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SpritesmithPlugin = require('webpack-spritesmith')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const TARGET = process.env.npm_lifecycle_event

let common = {
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
    }, {
      test: /\.json$/,
      loader: 'json',
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        'file?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
      ],
    }],
  },
  resolve: {
    modulesDirectories: [
      'node_modules',
      'spritesmith-generated',
    ],
  },
  plugins: [
    new SpritesmithPlugin({
      src: {
        cwd: path.resolve(__dirname, 'app'),
        glob: '**/sprite/*.png',
      },
      target: {
        image: path.resolve(__dirname, 'spritesmith-generated/sprite.png'),
        css: path.resolve(__dirname, 'spritesmith-generated/sprite.scss'),
      },
      apiOptions: {
        cssImageRef: 'sprite.png',
      },
      retina: '@3x',
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'content'),
        to: path.resolve(__dirname, 'dist'),
      },
    ]),
  ],
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, 'spritesmith-generated'),
      path.resolve(__dirname, 'app/app/styles'),
    ],
  },
}

if (TARGET !== 'storybook') {
  common = merge(common, {
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Shane Cavaliere - full stack developer + designer',
        template: path.resolve(__dirname, 'app/index.ejs'),
      }),
    ],
  })
}

if (TARGET === 'start' || TARGET === 'storybook') {
  module.exports = merge(common, {
    devtool: 'cheap-eval-source-map',
    entry: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      'react-hot-loader/patch',
      './app',
    ],
    output: {
      publicPath: '/',
    },
    module: {
      loaders: [
        {
          test: /\.s?css$/,
          loaders: [
            'style',
            'css?modules&' + qs.stringify({
              importLoaders: 2,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            }),
            'sass?sourceMap',
          ],
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new DashboardPlugin(),
    ],
  })
}

if (TARGET === 'build') {
  module.exports = merge(common, {
    devtool: 'cheap-module-source-map',
    entry: [
      './app',
    ],
    output: {
      publicPath: '/dist/',
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'strip-loader?strip[]=console.log',
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/,
          loader: ExtractTextPlugin.extract(
            'style',
            'css?modules&' + qs.stringify({
              importLoaders: 2,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            }),
            'sass'
          ),
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production'),
        },
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: true,
        },
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new ExtractTextPlugin('styles.css'),
    ],
  })
}
