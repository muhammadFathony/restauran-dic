/* eslint-disable no-undef */
Feature('Liking Restaurant')

Before(({ I }) => {
  I.amOnPage('/#/favorites')
})

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#query')
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-not-found')
})
