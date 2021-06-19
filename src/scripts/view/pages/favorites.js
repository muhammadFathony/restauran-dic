import FavoritesRestaurantDB from '../../data/favorite-restaurantsIdb'
import Main from '../../utils/main-initiator'

const Favorites = {
  async render () {
    return `
    <section class="content" id="content-utama">
        <div class="explore">
            <h1 class="explore-label">Favorites</h1>
            <div class="">
                <gallery-list  id="query"></gallery-list>
            </div>
        </div>
    </section>
          `
  },

  async afterRender () {
    const restaurants = await FavoritesRestaurantDB.getAllRestaurants()
    const newRestaurants = {
      restaurants: restaurants
    }
    console.log(newRestaurants)
    Main(newRestaurants, 'home')
  }
}
export default Favorites
