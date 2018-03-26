const { Command, flags } = require('@oclif/command');

const Renderer = require('./lib/renderer');

class WebpackConfigGeneratorCommand extends Command {
  async run() {
    const {flags} = this.parse(WebpackConfigGeneratorCommand)
    const name = flags.name || 'world'
    
    Renderer.render();
  }
}

WebpackConfigGeneratorCommand.description = `
Describe the command here
...
Extra documentation goes here
`

WebpackConfigGeneratorCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({char: 'v'}),
  // add --help flag to show CLI version
  help: flags.help({char: 'h'}),
  // test: flags.string({char: 't', description: 'test'}),
}

module.exports = WebpackConfigGeneratorCommand
