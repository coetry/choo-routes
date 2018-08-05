const choo = require('choo')
const css = require('sheetify')

css('tachyons')

const app = choo()

process.env.NODE_ENV !== 'production'
  ? app.use(require('choo-devtools')())
  : app.use(require('choo-service-worker')())

app.route('/', require('./views/main'))
app.route('/*', require('./views/404'))

module.exports = app.mount('body')
