/**
 * Template for a simple babel/es6 webpack setup.
 */
const path = require('path');

module.exports = {
  entry: {
    ${entryName}: ${entryPath};
  },
  output: {
    path: ${outputPath},
    filename: ${outputFilename}
  },
  mode: ${mode},
  module: {
    rules: [
      {
        test: ${jsExtensionRegex},
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};

