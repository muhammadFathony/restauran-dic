import '../component/gallery-list'
import '../component/gallery-item'
import '../component/detail-restaurant'
import DataRestaurant from '../data/restaurant'

const main = (dataRes, status) => {
  const onLoadContent = async () => {
    const galleryListElement = document.querySelector('gallery-list')
    galleryListElement.classList.add('sample-restaurant')
    try {
      const result = await DataRestaurant.getResaturant(dataRes)
      renderResult(galleryListElement, result)
    } catch (message) {
      fallbackResult(galleryListElement, message)
    }
  }

  const onLoadDetail = async () => {
    const detailRestaurant = document.querySelector('detail-restaurant')
    const result = await DataRestaurant.detailRestaurant(dataRes.restaurant)
    renderDetail(detailRestaurant, result)
  }

  const renderResult = (galleryListElement, result) => {
    galleryListElement.restaurant = result
  }

  const renderDetail = (detailRestaurant, result) => {
    detailRestaurant.restaurant = result
  }

  const fallbackResult = (galleryListElement, message) => {
    galleryListElement.renderError(message)
  }

  status === 'home' && onLoadContent()
  status === 'detail' && onLoadDetail()
}
export default main
