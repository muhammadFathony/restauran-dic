import UrlParser from '../../routes/url-parser'
import API from '../../data/restaurant-source'
import Main from '../../utils/main-initiator'
import { createLikeButtonTemplate } from '../../view/templates/template-creators'
const Detail = {
  async render () {
    return `
    <section class="content" id="content-utama">
        <div class="explore-detail">
            <h1 class="explore-label">Detail</h1>
                <detail-restaurant></detail-restaurant>
            </div>
            <div id="favorite-button">
            </div>
        </div>
    </section>
      `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const detail = await API.detailRestaurant(url.id)
    const favoriteButton = document.querySelector('#favorite-button')
    favoriteButton.innerHTML = createLikeButtonTemplate()
    Main(detail, 'detail')
  }
}

export default Detail
