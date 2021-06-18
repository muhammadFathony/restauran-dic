/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
/* eslint-disable no-prototype-builtins */
import { itActsAsfavoriteRestaurantModel } from './contract/favoriteRestaurantContract'

let favoriteRestaurant = []

const FavoriteRestaurantArray = {

  getRestaurants (id) {
    if (!id) {
      return
    }

    return favoriteRestaurant.find((restaurant) => restaurant.id === id)
  },

  getAllRestaurants () {
    return favoriteRestaurant
  },

  putRestaurants (restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return
    }

    // pastikan id ini belum ada dalam daftar favoriteRestaurant
    if (this.getRestaurants(restaurant.id)) {
      return
    }

    favoriteRestaurant.push(restaurant)
  },

  deleteRestaurants (id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteRestaurant = favoriteRestaurant.filter((restaurant) => restaurant.id !== id)
  }
}

describe('Favorite Movie Array Contract Test Implementation', () => {
  afterEach(() => favoriteRestaurant = [])

  itActsAsfavoriteRestaurantModel(FavoriteRestaurantArray)
})
