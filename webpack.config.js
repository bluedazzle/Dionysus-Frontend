var webpack = require('webpack');
const glob = require('glob');

var config = {
  entry: {
    vendor: [
      'react',
      'react-dom'
    ]
  },
  output: {
    path: __dirname + '/dist/js/',
    filename: '[name].js'
  },
  module: {
    preLoaders:[{
        test: /\.jsx$/, 
        loader: "eslint-loader", 
        exclude: /node_modules/
  }],
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: [ 'es2015', 'stage-0', 'react' ] }
      }
    ]
  },
  eslint: {
    configFile: './.eslintrc'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
        inline: true
    }
};

/**
 * find entries
 */
var files = glob.sync('./src/js/*/index.jsx');
var newEntries = files.reduce(function(memo, file) {
  var name = /.*\/(.*?)\/index\.jsx/.exec(file)[1];
  memo[name] = entry(name);
  return memo;
}, {});

config.entry = Object.assign({}, config.entry, newEntries);

/**
 * [entry description]
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
function entry(name) {
  return './src/js/' + name + '/index.jsx';
}

module.exports = config;