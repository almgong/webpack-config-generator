const shell = require('shelljs');

/**
 * Runs command line utilities.
 */
class Cmd {
  static echo(val) {
    shell.echo(val);
  }

  static cp(from, to) {
    shell.cp(from, to);
  }

  static sedModifyInPlace(searchRegex, toReplaceWithString, filePath) {
    shell.sed('-i', searchRegex, toReplaceWithString, filePath);
  }
}

module.exports = Cmd;
