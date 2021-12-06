/* eslint-disable @typescript-eslint/no-unused-vars */
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');

module.exports = function () {
  if (process.env.BUILD_TARGET === 'package') {
    return {
      // externals: {
      //   vant: 'vant',
      // },
      // plugins: [
      //   // new HtmlWebpackPlugin(),
      //   new HtmlWebpackExternalsPlugin({
      //     externals: [
      //       {
      //         module: 'vant',
      //         entry: 'lib/index.css',
      //       },
      //     ],
      //   }),
      // ],
    };
  }

  return {
    plugins: [
      // new HtmlWebpackPlugin(),
      new HtmlWebpackExternalsPlugin({
        externals: [
          {
            module: 'vant-oa',
            entry: 'lib/index.css',
          },
        ],
      }),
    ],
  };
};
