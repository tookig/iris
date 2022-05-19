const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, './dist/js'),
    filename: '[name].bundle.js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: []
}
