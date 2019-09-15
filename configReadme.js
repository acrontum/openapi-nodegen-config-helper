const fs = require('fs-extra')
const path = require('path')

module.exports = () => {
  const packageJson = require(process.cwd(), 'package.json')
  const config = require(process.cwd(), 'src/config')
  const filepath = path.join(process.cwd(), 'README.CONFIG.md')

  fs.ensureFileSync(filepath)
  fs.truncateSync(filepath)

  const addLine = (line) => {
    fs.appendFileSync(filepath, line + '\n')
  }

  addLine('# ' + packageJson.name)
  addLine(' ')
  addLine('## Environment variables descriptions')

  Object.keys(obj).forEach((k) => {
    if (k.indexOf('_docs') !== -1 && Array.isArray(obj[k])) {
      let requireOptional = (obj[k][1] === true) ? '(REQUIRED)' : '(OPTIONAL)'
      addLine('__*' + requireOptional + '  ' + obj[k][0] + ':*__ ')
      addLine(' ')
      addLine(obj[k][2])
      addLine(' ')
      addLine(' ')
    }
  })
}
