const pjson = require('./package.json')

class StubCommand {
  static async run () {
    let cmd = new this()
    await cmd.run()
    return cmd
  }

  async run () {
    console.log(`running stub command v${pjson.version}`)
  }
}

StubCommand.topic = 'stub'

exports.commands = [
  StubCommand
]
