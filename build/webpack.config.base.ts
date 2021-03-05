import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';
import { assetsPath, joinPath } from './utils';

export default {
  entry: './src/main.js',
  resolve: {
    extensions: ['.js', '.vue', '.ts', '.tsx', '.json'],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cwd: joinPath(__dirname, '../'),
        },
      },
      {
        test: /(\.s?css)$/,
        use: [
          // devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('img/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: assetsPath('fonts/[name].[hash:7].[ext]'),
        },
      },
    ],
  },
} as Configuration;
