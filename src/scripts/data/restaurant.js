/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable quotes */

class DataRestaurant {
  static getResaturant (dataRes) {
    return new Promise((resolve, reject) => {
      const listRestaurant = dataRes
      if (listRestaurant.restaurants.length > 0) {
        resolve(listRestaurant.restaurants)
      } else {
        reject(`<h1 class="restaurant-not-found">Data is not founds</h1>`)
      }
    })
  }

  static detailRestaurant (dataRes) {
    return new Promise((resolve, reject) => {
      const listRestaurant = dataRes
      if (listRestaurant) {
        resolve(listRestaurant)
      } else {
        reject(`<h1 class="restaurant-not-found">Data is not found</h1>`)
      }
    })
  }
}

export default DataRestaurant
