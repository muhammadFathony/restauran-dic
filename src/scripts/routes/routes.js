import Home from '../view/pages/home'
import Detail from '../view/pages/detail'
import News from '../view/pages/news'

const routes = {
  '/': Home, // default page
  '/news': News,
  '/detail/:id': Detail
}

export default routes
