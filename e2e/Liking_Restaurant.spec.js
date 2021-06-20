/* eslint-disable no-trailing-spaces */
/* eslint-disable no-undef */
const assert = require('assert')

Feature('Liking Restaurant')

Before(({ I }) => {
  I.amOnPage('/#/favorites')
})
const message = 'Tidak ada restaurant untuk ditampilkan'
Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#query')
  I.see(message, '.restaurant-not-found')
})

Scenario('liking one restaurant', async ({ I }) => {
  I.see(message, '.sample-restaurant')
 
  I.amOnPage('/')
  
  I.seeElement('.item-restaurant .sample-item')
  const firstRestaurant = locate('#btndetail').first()
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant)
  I.click(firstRestaurant)
  
  I.seeElement('#likeButton')
  I.click('#likeButton')
  
  I.amOnPage('/#/favorites')
  I.seeElement('.item-restaurant .sample-item')
  const likedRestaurant = await I.grabTextFrom('#btndetail')
  
  assert.strictEqual(firstRestaurantTitle, likedRestaurant)
})

Scenario('unliking one restaurant', async ({ I }) => {
  I.see(message, '.sample-restaurant')
 
  I.amOnPage('/')
  
  I.seeElement('.item-restaurant .sample-item')
  const firstRestaurant = locate('#btndetail').first()
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant)
  I.click(firstRestaurant)
  
  I.seeElement('#likeButton')
  I.click('#likeButton')
  
  I.amOnPage('/#/favorites')
  I.seeElement('.item-restaurant .sample-item')
  const likedRestaurant = await I.grabTextFrom('#btndetail')
  
  assert.strictEqual(firstRestaurantTitle, likedRestaurant)
  
  I.click(likedRestaurant)
  I.seeElement('#likeButton')
  I.click('#likeButton')
  
  I.amOnPage('/#/favorites')
  I.seeElement('#query')
  const EmptyFavRestaurant = await I.grabTextFrom('#query')
  assert.strictEqual(EmptyFavRestaurant, message)
})

Scenario('Customer review', async ({ I }) => {
  I.see(message, '#query')

  I.amOnPage('/')

  I.seeElement('.item-restaurant .sample-item')
  I.click(locate('#btndetail').first())

  I.seeElement('.add-reviews')
  
  const textReview = 'Review from E2E restaurant'
  I.fillField('textName', 'Muhammad Fathony')
  I.fillField('textReview', textReview)

  I.click('#btn-review')
  
  const lastReview = locate('.review-desc').last()
  const textLastReview = await I.grabTextFrom(lastReview)
  pause()
  assert.strictEqual(textReview, textLastReview)
})
