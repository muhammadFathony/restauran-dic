import UrlParser from '../../routes/url-parser'
import API from '../../data/restaurant-source'
import Main from '../../utils/main-initiator'
const Detail = {
  async render () {
    return `
    <section class="content" id="content-utama">
        <div class="explore-detail">
            <h1 class="explore-label">Detail</h1>
                <detail-restaurant></detail-restaurant>
            </div>
        </div>
    </section>
      `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const detail = await API.detailRestaurant(url.id)
    Main(detail, 'detail')
  }
}

export default Detail
