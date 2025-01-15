module.exports = {
  mode: 'development',
  entry: './js/dashboard_main.js',
  output: { filename: 'bundle.js', path: 'public' },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
    ],
  },
  performance: {
    maxAssetSize: 1024 * 1024, // 1 MB
  },
};
