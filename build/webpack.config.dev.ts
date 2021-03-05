import { merge } from 'webpack-merge';
import baseConfig from './webpack.config.base';

export default merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
});

// const assetsPath = (_path) => {
//   return path.posix.join('static', _path);
// };

// export default {
//   mode: 'development',
//   entry: './src/main.js',
//   devtool: 'eval-cheap-module-source-map',
//   output: {
//     filename: '[name].js',
//     chunkFilename: '[name].chunk.js',
//     libraryTarget: 'umd',
//   },
//   resolve: {
//     extensions: ['.js', '.vue', '.json'],
//   },
//   plugins: [
//     new VueLoaderPlugin(),
//     new HtmlWebpackPlugin({
//       template: './public/index.html',
//     }),
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.vue$/,
//         loader: 'vue-loader',
//       },
//       {
//         test: /\.s?css$/,
//         use: [
//           // 目前几个问题：
//           // 1. 目前对于css提取时，会有个空的JS文件，这个webpack在处理，目前先加载个也不是大问题
//           // https://github.com/webpack/webpack/issues/1967
//           // 2. css提取时，希望只提取出一个css文件，等待插件支持。 https://github.com/webpack-contrib/mini-css-extract-plugin/pull/348
//           // devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
//           'style-loader',
//           'css-loader',
//         ],
//       },
//       {
//         test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
//         loader: 'url-loader',
//         options: {
//           limit: 10000,
//           name: assetsPath('img/[name].[hash:7].[ext]'),
//         },
//       },
//       {
//         test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
//         loader: 'url-loader',
//         options: {
//           limit: 10000,
//           name: assetsPath('fonts/[name].[hash:7].[ext]'),
//         },
//       },
//     ],
//   },
// } as Configuration;
