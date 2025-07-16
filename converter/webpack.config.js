
// I have no idea wtf I'm doing

const path = require('path');

module.exports = {
  entry: './src/index.ts',
  target: "web",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: { "zlib": false }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'web'),
  },
};