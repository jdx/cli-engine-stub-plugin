const pjson = require('./package.json')

exports.commands = [
  class StubCommand {
    async static run () {
      let cmd = new this()
      await cmd.run()
      return cmd
    }
  }

  async run () {
    console.log(`running stub command v${pjson.version}`)
  }
]
