const path = require('path');

module.exports = {
  mode: 'development',
  entry: './js/dashboard_main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: ['file-loader', { loader: 'image-webpack-loader' }],
      },
    ],
  },
  performance: {
    maxAssetSize: 1024 * 1024, // 1 MB
  },
};
