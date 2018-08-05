const html = require('choo/html')
const css = require('sheetify')

const styles = css`
  :host {
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    margin-right: 15px;
    margin-top: 20px;
    display: block;
  }
`

module.exports = function (dst, txt) {
  return html`
    <a class="light-red ${styles}" href="${dst}">${txt}</a>
  `
}
