/**
 * This is a base configuration file useful for building other template files.
 * Note that using this file as a config file WILL NOT WORK as values are left 
 * blank. This is mainly for reference or exporting for self customization.
 * 
 * Tentative rules of templates in wpcg:
 * 
 * Everything above `\/* BEGIN TEMPLATE *\/` will be ignored and removed in the
 * final generated output configuration file. This is an optional space for you
 * to specify anything important for the template file.
 *
 * Variables that will be substituted are wrapped in: ${}.
 * For instance, if your template contains:
 * ```
 * entry: {
 *   ${entryName}: '${path}'
 * }
 * ```
 *
 * Then `${entryName}` and `${path}` would be replaced with configuration options.
 *
 * Have fun and feel free to leave this area blank in your own config files.
 */

/* BEGIN TEMPLATE */
const path = require('path');

module.exports = {
  entry: {},
  output: {
    path: ,
    filename:
  },
  mode: ,
  module: {
    rules: [
      {
        test: ,
        exclude: ,
        use: {
          loader: 
        }
      }
    ]
  },
  plugins: []
};