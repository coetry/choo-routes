const html = require('choo/html')
const css = require('sheetify')
const link = require('../komponents/link')

const ff = css`
  :host {
    font-family: --apple-system, system-ui;
  }
  
  :host h1 {
    text-transform: uppercase;
  }
`

var TITLE = '🔲'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)


  return html`
    <body class="${ff}">
      <div class="flex flex-column items-center justify-center vh-100">
        <div style="position:fixed;top:20px;left:20px;width:50px;height:50px;background:${state.query.color || '#fff;'} ${!state.query.color ? 'border: 1px solid #111111;' : ''}"></div>
        <div>
          ${link('?color=red', 'red')} 
          ${link('?color=green', 'green')}
          ${link('?color=blue', 'blue')}
          ${link('/', '/')}
        </div>
      </div>
    </body>
  `
}
