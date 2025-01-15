module.exports = {
  mode: 'development',
  entry: './js/dashboard_main.js',
  output: { filename: 'bundle.js', path: 'public' },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: ['file-loader', { loader: 'image-webpack-loader' }],
      },
    ],
  },
  performance: {
    maxAssetSize: 1024 * 1024, // 1 MB
  },
};
