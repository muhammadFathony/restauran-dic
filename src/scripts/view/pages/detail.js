/* eslint-disable no-undef */
import UrlParser from '../../routes/url-parser'
import RestaurantSource from '../../data/restaurant-source'
import Main from '../../utils/main-initiator'
import FavoriteButtonInitiator from '../../utils/favoriteButton-initiator'
const Detail = {
  async render () {
    return `
    <section class="content" id="content-utama">
        <div class="explore-detail">
            <h1 class="explore-label">Detail</h1>
                <detail-restaurant></detail-restaurant>
            <div id="favorite-button-container"></div>
            <div class="add-reviews">
              <div class="form">
                <label>Name : </label>
                <input type="text" id="textName" name="textName" placeholder="Your Name" class="text-reviews" />
              </div>
              <div class="form">
                <label>Review : </label>
                <textarea type="text" id="textReview" name="textReview" placeholder="Your Review" class="text-reviews"></textarea>
              </div>
              <div class="form">
                <button id="btn-review"  aria-label="button-review" class="button-min button-review">Send Review</button>
              </div>
              <div class="message-review">
                <h1 id="message-sent">pesan</h1>
              </div>
            </div>
        </div>
    </section>
      `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await RestaurantSource.detailRestaurant(url.id)
    Main(restaurant, 'detail')

    const buttonReview = document.querySelector('#btn-review')
    const textName = document.querySelector('#textName')
    const textReview = document.querySelector('#textReview')
    const idRestaurant = restaurant.restaurant.id
    buttonReview.addEventListener('click', () => {
      const review = {
        id: idRestaurant,
        name: textName.value,
        review: textReview.value
      }
      RestaurantSource.sendReview(review)
        .then(res => {
          const cusRev = document.querySelector('.customer-reviews')
          const mesRev = document.querySelector('.message-review')
          const messageSent = document.querySelector('#message-sent')
          messageSent.innerHTML = '<h5>Review berhasil ditambahkan</h5>'
          mesRev.style.display = 'block'
          let newReview = ''
          res.customerReviews.forEach((value, key) => {
            newReview += `<article class="review" id="${key}">
                              <h3 class="date-review">Review - ${value.date}</h3>
                              <div class="review-desc">${value.review}</div>
                              <div class="reviewers">
                                <h5>By : ${value.name}</h5>
                              </div>
                          </article>`
          })
          cusRev.innerHTML = newReview
        })
      textName.value = ''
      textReview.value = ''
    })

    FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favorite-button-container'),
      restaurant: {
        id: idRestaurant,
        name: restaurant.restaurant.name,
        description: restaurant.restaurant.description,
        pictureId: restaurant.restaurant.pictureId,
        city: restaurant.restaurant.city,
        rating: restaurant.restaurant.rating
      }
    })
  }
}

export default Detail
