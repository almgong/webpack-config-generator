const shell = require('shelljs');
const registry = require('../template-registry');

/**
 * Imitates a [Li|U]nix `cp` command.
 * @param  {String} from    path of entity to copy from
 * @param  {String} to      path of entity to copy to
 * @param  {Array}  flagArr optional flag array, e.g. ['-R']
 * @return {[type]}       [description]
 */
function copy(from, to, flagArr = []) {
  const flags = flagArr.join(' ');
  shell.cp(flags, from, to);
}

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
  static render(renderedOutputPath, renderedOutputFilename = 'webpack.config.js', template = 'babel') {
    renderedOutputPath = renderedOutputPath || process.cwd();

    shell.echo('will output in: ' + renderedOutputPath);
    shell.echo('using template: ' + template + ' at: ' + registry[template]);
    
    shell.echo('Creating configuration file...');
    copy(registry[template], path.join(renderedOutputPath, renderedOutputFilename));

  }
}

module.exports = Renderer;