const { Command, flags } = require('@oclif/command');

const Renderer = require('./lib/renderer');

class WebpackConfigGeneratorCommand extends Command {
  async run() {
    const { flags } = this.parse(WebpackConfigGeneratorCommand)
    process.env.DEBUG = flags.debug || 'false';

    Renderer.render();
  }
}

WebpackConfigGeneratorCommand.description = `
Describe the command here
...
Extra documentation goes here
`

WebpackConfigGeneratorCommand.flags = {
  // add --version/-v flag to show CLI version
  version: flags.version({char: 'v'}),

  // add --help/-h flag to show CLI version
  help: flags.help({char: 'h'}),

  // add --debug/-d flag to print debug messages
  debug: flags.boolean({char: 'd', description: 'Prints debug messages'}),
};

module.exports = WebpackConfigGeneratorCommand;
