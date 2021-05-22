/* eslint-disable accessor-pairs */
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
    this.innerHTML = `
        <article class="sample-item-detail">
          <img src="https://restaurant-api.dicoding.dev/images/small/14" alt="Melting Pot" class="sample-img-detail">
              <div class="sample-content">
                  <p class="content-date">${this._restaurant.name}<a href="#" class="content-author button-min"> from Medan</a>
                  </p>
                  <h1 class="content-title"><a class="button-min" href="/#/detail/rqdv5juczeskfw1e867">Melting Pot</a></h1>
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
      <article class="customer-reviews">

      </article>`
  }
}

customElements.define('detail-restaurant', DetailRestaurant)
