/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable quotes */
import data from '../../DATA.json'

class DataRestaurant {
  static getResaturant () {
    return new Promise((resolve, reject) => {
      const listRestaurant = data
      if (listRestaurant.restaurants.length > 0) {
        resolve(listRestaurant.restaurants)
      } else {
        reject(`<h1>Data is not found</h1>`)
      }
    })
  }
}

export default DataRestaurant
