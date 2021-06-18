import FavoriteButtonInitiator from '../../src/scripts/utils/favoriteButton-initiator'

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteButtonInitiator.init({
    favoriteButtonContainer: document.querySelector('#favorite-button'),
    restaurant
  })
}

export { createLikeButtonPresenterWithRestaurant }
