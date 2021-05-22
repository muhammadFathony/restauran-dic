import API_ENDPOINT from '../globals/api-endpoint'

class RestaurantSource {
  static async homeRestaurant () {
    const response = await fetch(API_ENDPOINT.HOME)
    const responseJson = await response.json()
    return responseJson
  }

  static async detailRestaurant (id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id))
    return response.json()
  }
}

export default RestaurantSource
