/* eslint-disable accessor-pairs */
class GalleryItem extends HTMLElement {
  set restaurants (restaurants) {
    this._restaurants = restaurants
    this.render()
  }

  render () {
    this.innerHTML = `
        <article class="sample-item">
            <img src="${this._restaurants.pictureId}" alt="${this._restaurants.name}" class="sample-img">
                <div class="sample-content">
                    <p class="content-date">${this._restaurants.name}<a href="#" class="content-author"> from ${this._restaurants.city}</a>
                    </p>
                    <h1 class="content-title"><a href="#">${this._restaurants.name}</a></h1>
                    <p class="content-description">${this._restaurants.description}</p>
                </div>
        </article>`
  }
}

customElements.define('gallery-item', GalleryItem)
