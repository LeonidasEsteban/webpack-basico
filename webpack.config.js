module.exports = {
  entry: {
    home: './home.js',
  },
  output: {
    filename: 'dist/js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['es2017'],
        }
      }
    ]
  }
}
