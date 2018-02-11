module.exports = {
  entry: {
    app: './app.js' // 相对路径
  },

  output: {
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: {
                  // browsers: ['> 1%', 'last 2 versions','ie >= 10']
                  browsers: ['ie >= 10']
                  // browsers: ['chrome 61']
                }
              }]
            ],

          }
        },
        exclude: '/node_modules/'
      }
    ]
  }
}
