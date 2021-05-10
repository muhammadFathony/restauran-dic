/* eslint-disable accessor-pairs */
import './gallery-item'

class GalleryList extends HTMLElement {
  set restaurant (restaurant) {
    this._restaurant = restaurant
    this.render()
  }

  render () {
    this.innerHTML = ''
    this._restaurant.forEach(restaurants => {
      const galleryItemElement = document.createElement('gallery-item')
      galleryItemElement.restaurants = restaurants
      this.appendChild(galleryItemElement)
    })
  }

  renderError (message) {
    this.innerHTML = ''
    this.innerHTML += `<div>${message}</div>`
  }
}

customElements.define('gallery-list', GalleryList)
