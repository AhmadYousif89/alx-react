const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    header: './header/header.js',
    body: './body/body.js',
    footer: './footer/footer.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
    sourceMapFilename: '[file].map',
  },
  devServer: {
    contentBase: path.join(__dirname, './public'),
    port: 8564,
    open: true,
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
    maxAssetSize: 1024 * 1024, // 1 MB,
    maxEntrypointSize: 1024 * 1024 * 2, // 2 MB
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()],
};
