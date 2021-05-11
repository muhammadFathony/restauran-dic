import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'
import '../styles/responsive.css'
// component
import './component/header-app'
import './component/app-bar'
import './component/jumbotron-app'
import './component/footer-app'
// view
import mainGalery from './view/main'

document.addEventListener('DOMContentLoaded', mainGalery)
console.log('Hello Coders! :)')
const menu = document.querySelector('#hamburger')
const hero = document.querySelector('.hero-element')
const main = document.querySelector('main')
const drawer = document.querySelector('#drawer')
menu.addEventListener('click', function (event) {
  drawer.classList.toggle('open')
  event.stopPropagation()
})

hero.addEventListener('click', function () {
  drawer.classList.remove('open')
})

main.addEventListener('click', function () {
  drawer.classList.remove('open')
})
