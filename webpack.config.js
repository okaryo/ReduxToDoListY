module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.jsx', '.ts', '.js']
  },
  devServer: {
    contentBase: './src',
    inline: true,
    hot: true,
    port: 3000,
    host:"0.0.0.0"
  }
}
