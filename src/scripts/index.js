import 'regenerator-runtime' /* for async await transpile */
// styles
import '../styles/main.css'
import '../styles/responsive.css'

// component
import './component/header-app'
import './component/app-bar'
import './component/jumbotron-app'
import './component/footer-app'

// view
// import mainGalery from '../scripts/utils/main-initiator'
import App from './view/app'

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#maincontent')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  // document.addEventListener('DOMContentLoaded', mainGalery)
})
