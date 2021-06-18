/* eslint-disable no-undef */
import { itActsAsfavoriteRestaurantModel } from './contract/favoriteRestaurantContract'
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurantsIdb'

describe('Favorite Movie Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurants()).forEach(async (restaurant) => {
      await FavoriteRestaurantIdb.deleteRestaurants(restaurant.id)
    })
  })

  itActsAsfavoriteRestaurantModel(FavoriteRestaurantIdb)
})
