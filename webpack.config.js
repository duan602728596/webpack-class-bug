module.exports = {
  mode: 'development',
  devtool: false,
  module: {
    rules: [
      {
        test: /.*\.jsx?/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  targets: { browsers: [
                      'last 2 versions',
                      'last 10 Chrome versions',
                      'last 1 year',
                      'IE 11'
                    ] },
                  modules: false,
                  useBuiltIns: 'usage',
                  bugfixes: true,
                  corejs: 3
                }]
              ],
              plugins: [
                '@babel/plugin-proposal-class-static-block',
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-do-expressions',
                ['@babel/plugin-transform-runtime', {
                  corejs: { version: 3, proposals: true },
                  helpers: true,
                  regenerator: true
                }]
              ]
            }
          }
        ]
      }
    ]
  }
};
