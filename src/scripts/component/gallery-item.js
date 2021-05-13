/* eslint-disable accessor-pairs */
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
    this.innerHTML = `
        <article class="sample-item">
            <img src="${this._restaurants.pictureId}" alt="${this._restaurants.name}" class="sample-img">
                <div class="sample-content">
                    <p class="content-date">${this._restaurants.name}<a class="button-min" href="#" class="content-author"> from ${this._restaurants.city}</a>
                    </p>
                    <h1 class="content-title"><a class=""button-min href="#">${this._restaurants.name}</a></h1>
                    <p class="content-description">${desc}</p>
                </div>
                <div class="sample-rating">
                  Rating Restaurant : ${this._restaurants.rating}
                <div>
        </article>`
  }
}

customElements.define('gallery-item', GalleryItem)
