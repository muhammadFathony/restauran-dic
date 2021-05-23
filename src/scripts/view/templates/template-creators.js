
const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="favorite-button">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="favorite-button">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export {
  createLikeButtonTemplate,
  createLikedButtonTemplate
}
