const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
    // alias: {
    //   style: path.resolve(__dirname, 'src')
    // }
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.tsx?$/,
        use: ['ts-loader']
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
          loader: 'css-loader',
          options: {
            modules: {
              compileType: "module",
              mode: 'local',
              exportGlobals: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
              localIdentContext: path.resolve(__dirname, "src"),
              localIdentHashPrefix: "my-custom-hash",
              exportLocalsConvention: "camelCase",
            }
          }
      }
     ]
    }
    ]
  }
};
