/* eslint-disable no-undef */
const itActsAsfavoriteRestaurantModel = (favoriteRestaurant) => {
  it('should return the restaurant that has been added', async () => {
    favoriteRestaurant.putRestaurants({ id: 1 })
    favoriteRestaurant.putRestaurants({ id: 2 })

    expect(await favoriteRestaurant.getRestaurants(1))
      .toEqual({ id: 1 })
    expect(await favoriteRestaurant.getRestaurants(2))
      .toEqual({ id: 2 })
    expect(await favoriteRestaurant.getRestaurants(3))
      .toEqual(undefined)
  })

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    favoriteRestaurant.putRestaurants({ aProperty: 'property' })

    expect(await favoriteRestaurant.getAllRestaurants())
      .toEqual([])
  })

  it('can return all of the restaurant that have been added', async () => {
    favoriteRestaurant.putRestaurants({ id: 1 })
    favoriteRestaurant.putRestaurants({ id: 2 })

    expect(await favoriteRestaurant.getAllRestaurants())
      .toEqual([
        { id: 1 },
        { id: 2 }
      ])
  })

  it('should remove favorite restaurant', async () => {
    favoriteRestaurant.putRestaurants({ id: 1 })
    favoriteRestaurant.putRestaurants({ id: 2 })
    favoriteRestaurant.putRestaurants({ id: 3 })

    await favoriteRestaurant.deleteRestaurants(1)

    expect(await favoriteRestaurant.getAllRestaurants())
      .toEqual([
        { id: 2 },
        { id: 3 }
      ])
  })

  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    favoriteRestaurant.putRestaurants({ id: 1 })
    favoriteRestaurant.putRestaurants({ id: 2 })
    favoriteRestaurant.putRestaurants({ id: 3 })

    await favoriteRestaurant.deleteRestaurants(4)

    expect(await favoriteRestaurant.getAllRestaurants())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 }
      ])
  })
}

export { itActsAsfavoriteRestaurantModel }
