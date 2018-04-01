/* eslint-disable no-useless-escape */

const path = require('path');

/**
 * A simple registry for mapping template names inputed from a user to the templates
 * that will be rendered.
 */
module.exports = {
  babel: {
    templatePath: path.resolve('src/templates/webpack.config.babeles6.js'),
    defaults: {
      entryName: 'index.js',
      entryPath: 'path.resolve(__dirname, index.js)',
      outputPath: 'path.resolve(__dirname, "dist")',
      outputFilename: '[name].bundle.js',
      mode: 'process.env.NODE_ENV || development',
      jsExtensionRegex: '/\.[js|jsx]/'
    }
  }
};
