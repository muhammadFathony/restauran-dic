/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable no-undef */
import FavoriteButtonInitiator from './../src/scripts/utils/favoriteButton-initiator'
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurantsIdb';
import FavoriteRestaurantsIdb from '../src/scripts/data/favorite-restaurantsIdb';

const addfavoriteButtonContainer = () => {
  document.body.innerHTML = '<div id="favorite-button"></div>';
};

describe('Unliking A Restaurant', () => {
  beforeEach(async () => {
    addfavoriteButtonContainer();
    await FavoriteRestaurantIdb.putRestaurants({ id: 1 });
  });
   
  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurants(1);
  });
   
  it('should display unlike widget when the restaurant has been liked', async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favorite-button'),
      restaurant: {
        id: 1
      }
    });
   
    expect(document.querySelector('[aria-label="unlike this restaurant"]'))
      .toBeTruthy();
  });
   
  it('should not display like widget when the restaurant has been liked', async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favorite-button'),
      restaurant: {
        id: 1
      }
    });
   
    expect(document.querySelector('[aria-label="like this restaurant"]'))
      .toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favorite-button'),
      restaurant: {
        id: 1
      }
    });
   
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
   
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favorite-button'),
      restaurant: {
        id: 1,
      },
    });
   
    // hapus dulu film dari daftar film yang disukai
    await FavoriteRestaurantIdb.deleteRestaurants(1);
   
    // kemudian, simulasikan pengguna menekan widget batal menyukai film
    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
   
    expect(await FavoriteRestaurantsIdb.getAllRestaurants()).toEqual([]);
  });
});
