import '../component/gallery-list'
import DataRestaurant from '../data/restaurant'

const main = () => {
  const galleryListElement = document.querySelector('gallery-list')
  galleryListElement.classList.add('sample-restaurant')
  const onLoadContent = async () => {
    try {
      const result = await DataRestaurant.getResaturant()
      renderResult(result)
    } catch (message) {
      fallbackResult(message)
    }
  }

  const renderResult = result => {
    galleryListElement.restaurant = result
  }

  const fallbackResult = message => {
    galleryListElement.renderError(message)
  }

  onLoadContent()
}
export default main
