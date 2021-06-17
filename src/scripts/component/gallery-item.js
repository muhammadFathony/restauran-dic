/* eslint-disable accessor-pairs */
import CONFIG from '../globals/config'

class GalleryItem extends HTMLElement {
  set restaurants (restaurants) {
    this._restaurants = restaurants
    this.render()
  }

  render () {
    let desc = ''
    if (this._restaurants.description.length < 300) {
      desc = this._restaurants.description
    } else {
      desc = this._restaurants.description.substring(0, 300)
    }
    const urlImg = `${CONFIG.BASE_IMAGE_URL}${this._restaurants.pictureId}`
    this.innerHTML = `
        <article class="sample-item">
            <img src="${urlImg}" alt="${this._restaurants.name}" class="lazyload sample-img">
                <div class="sample-content">
                    <p class="content-date">${this._restaurants.name} <a href="#" class="content-author button-min"> from ${this._restaurants.city}</a>
                    </p>
                    <h1 class="content-title"><a class="button-min" href="${`/#/detail/${this._restaurants.id}`}">${this._restaurants.name}</a></h1>
                    <p class="content-description">${desc} ...</p>
                </div>
                <div class="sample-rating">
                  Rating Restaurant : ${this._restaurants.rating}
                </div>
        </article>`
  }
}

customElements.define('gallery-item', GalleryItem)
