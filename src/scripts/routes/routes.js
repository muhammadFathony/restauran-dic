import Home from '../view/pages/home'
import Detail from '../view/pages/detail'
import Favorites from '../view/pages/favorites'

const routes = {
  '/': Home, // default page
  '/favorites': Favorites,
  '/detail/:id': Detail
}

export default routes
