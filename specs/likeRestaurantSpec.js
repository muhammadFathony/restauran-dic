/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable no-undef */
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurantsIdb';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="favorite-button"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
  });
  
  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })
   
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantIdb.getRestaurants(1);
   
    expect(restaurant).toEqual({ id: 1 });
    FavoriteRestaurantIdb.deleteRestaurants(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 })
   
    // Tambahkan film dengan ID 1 ke daftar film yang disukai
    await FavoriteRestaurantIdb.putRestaurants({ id: 1 });
    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    // tidak ada film yang ganda
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);
 
    FavoriteRestaurantIdb.deleteRestaurants(1);
  });

  it('should not add a movie when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({})

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
   
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
})
