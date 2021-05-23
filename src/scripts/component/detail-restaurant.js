
/* eslint-disable accessor-pairs */
import CONFIG from '../globals/config'

class DetailRestaurant extends HTMLElement {
  set restaurant (restaurant) {
    this._restaurant = restaurant
    this.render()
  }

  render () {
    let listCategories = ''
    this._restaurant.categories.forEach(categori => {
      listCategories += `<h1>- ${categori.name}</h1>`
    })

    let foods = ''
    this._restaurant.menus.foods.forEach(food => {
      foods += `<h3>- ${food.name}</h3>`
    })

    let drinks = ''
    this._restaurant.menus.drinks.forEach(drink => {
      drinks += `<h3>- ${drink.name}</h3>`
    })
    let reviews = ''
    this._restaurant.customerReviews.forEach(review => {
      reviews += `<article class="review">
                      <h3 class="date-review">Review - ${review.date}</h3>
                      <div class="review-desc">${review.review}</div>
                      <div class="reviewers">
                        <h5>By : ${review.name}</h5>
                      </div>
                  </article>`
    })
    this.innerHTML = `
        <article class="sample-item-detail">
          <img src="${CONFIG.BASE_IMAGE_URL}${this._restaurant.pictureId}" alt="Melting Pot" class="sample-img-detail">
              <div class="sample-content">
                  <p class="content-date">${this._restaurant.name}<a href="/#/detail/${this._restaurant.id}" class="content-author button-min"> from Medan</a>
                  </p>
                  <h1 class="content-title"><a class="button-min" href="/#/detail/${this._restaurant.id}">Melting Pot</a></h1>
                  <p class="content-description">${this._restaurant.description}</p>
              </div>
              <div class="sample-food-drink">
                <h1>Address : ${this._restaurant.address}</h1><br>
                <h1>Categories: </h1>
                ${listCategories}
                <h1 style="padding-top:15px;">Foods Menu : </h1>
                <div class="menu-foods">
                  ${foods}
                </div>
                <h1 style="padding-top:15px;">Drink Menu : </h1>
                <div class="menu-foods">
                  ${drinks}
                </div>
                <div class="sample-rating-detail">
                  Rating Restaurant : ${this._restaurant.rating}
                </div>
      </article>
      <div class="customer-reviews">
        ${reviews}
      </div>`
  }
}

customElements.define('detail-restaurant', DetailRestaurant)
