
import homeRestaurantSource from '../../data/restaurant-source'
import Main from '../../utils/main-initiator'
const Home = {
  async render () {
    return `
    <section class="content" id="content-utama">
        <div class="explore">
            <h1 class="explore-label">Explorer</h1>
            <div class="">
                <gallery-list id="query"></gallery-list>
            </div>
        </div>
    </section>
    `
  },

  async afterRender () {
    const home = await homeRestaurantSource.homeRestaurant()
    Main(home, 'home')
  }
}
export default Home
