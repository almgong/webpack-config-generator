const path = require('path');

const Cmd = require('./cmd');
const d = require('./debugger');
const registry = require('../template-registry');

/**
 * Renders (really, prepares via substituting variables) templates in `templates/`.
 */
class Renderer {
  /**
   * Renders a template with the specified configuration options.
   * @param  {String} renderedOutputPath     where to output the webpack config file
   * @param  {String} renderedOutputFilename name of webpack config file, defaults to webpack.config.js
   * @param  {String} template               registered name of template file, defaults to the provided babel/es6 template (see template-registry.js)
   */
  static render(renderedOutputPath = process.cwd(), renderedOutputFilename = 'webpack.config.js', template = 'babel') {
    // create file and rename as specified
    d.log('Creating configuration file...');
    const templatePath = registry[template].templatePath;
    Cmd.cp(templatePath, path.join(renderedOutputPath, renderedOutputFilename));

    // replace variables as necessary in template
    d.log('Replacing variables...');
    this._renderVariables(path.join(renderedOutputPath, renderedOutputFilename), registry[template].defaults);

    // complete
    Cmd.echo('... And done!');
  }

  static _renderVariables(filePath, variableMapping) {
    Object.keys(variableMapping).forEach(k => {
      d.log(`replacing: ${this._wrapInTemplatingSyntax(k)} with ${variableMapping[k]} in ${filePath}`);
      Cmd.sedModifyInPlace(this._wrapInTemplatingSyntax(k), variableMapping[k], filePath);
    });
  }

  static _wrapInTemplatingSyntax(value) {
    return `\\$\\{${value}\\}`;
  }
}

module.exports = Renderer;
