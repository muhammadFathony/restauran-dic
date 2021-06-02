import API_ENDPOINT from '../globals/api-endpoint'
class RestaurantSource {
  static async homeRestaurant () {
    const response = await fetch(API_ENDPOINT.HOME, { mode: 'cors' })
    const responseJson = await response.json()
    return responseJson
  }

  static async detailRestaurant (id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id), { mode: 'cors' })
    return response.json()
  }

  static async sendReview (review) {
    const myHeaders = new Headers()
    myHeaders.append('X-Auth-Token', '12345')
    myHeaders.append('Content-Type', 'application/json')

    const raw = JSON.stringify(review)

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    }

    await fetch('https://restaurant-api.dicoding.dev/review', requestOptions)
      .then(response => response.text())
      .then(result => {
        alert('sukses add review')
        return result.json()
      })
      .catch(error => {
        return error
      })
  }
}

export default RestaurantSource
