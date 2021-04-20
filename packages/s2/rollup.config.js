import getGlobal from '../../globalRollup.config'

const packageJson = require('./package.json')

const { external, output, plugins } = getGlobal(packageJson)

export default {
  input: 'src/index.ts',
  external,
  output,
  plugins
}
