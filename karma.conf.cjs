module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', 'webpack'],

    files: [
      { pattern: 'src/tests/index.js', watched: false },
    ],

    preprocessors: {
      'src/tests/index.js': ['webpack'],
    },

    webpack: {
      mode: 'development',
      devtool: 'inline-source-map',
      resolve: { extensions: ['.js', '.jsx'] },
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: 'babel-loader',
          },
          {
            // Permite imports sin extensión ('./auth', './Button') en proyectos "type": "module"
            test: /\.m?jsx?$/,
            resolve: { fullySpecified: false },
          },
          { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        ],
      },
    },

    reporters: ['progress', 'kjhtml'],

    browsers: ['ChromeHeadlessCI'],
    customLaunchers: {
      ChromeHeadlessCI: { base: 'ChromeHeadless', flags: ['--no-sandbox'] },
    },

    singleRun: true,
  });
};