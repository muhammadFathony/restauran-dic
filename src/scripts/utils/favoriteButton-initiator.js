import FavoriteRestaurantDB from '../data/favorite-restaurantsIdb'
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../view/templates/template-creators'

const FavoriteButtonInitiator = {
  async init ({ favoriteButtonContainer, restaurant }) {
    this._favoriteButtonContainer = favoriteButtonContainer
    this._restaurant = restaurant

    await this._renderButton()
  },

  async _renderButton () {
    const { id } = this._restaurant

    if (await this._isRestaurantExist(id)) {
      this._renderLiked()
    } else {
      this._renderLike()
    }
  },

  async _isRestaurantExist (id) {
    const restaurant = await FavoriteRestaurantDB.getRestaurants(id)
    return !!restaurant
  },

  _renderLike () {
    this._favoriteButtonContainer.innerHTML = createLikeButtonTemplate()

    const likeButton = document.querySelector('#likeButton')
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantDB.putRestaurants(this._restaurant)
      this._renderButton()
    })
  },

  _renderLiked () {
    this._favoriteButtonContainer.innerHTML = createLikedButtonTemplate()

    const likeButton = document.querySelector('#likeButton')
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantDB.deleteRestaurants(this._restaurant.id)
      this._renderButton()
    })
  }
}

export default FavoriteButtonInitiator
