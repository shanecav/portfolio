/**
 * Exports the generators so plop knows them
 *
 * Stolen shamelessly from https://github.com/mxstbr/react-boilerplate
 */

const componentGenerator = require('./component/index.js')

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator)
}
