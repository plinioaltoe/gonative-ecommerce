import { combineReducers } from 'redux'

import { reducer as categories } from './categories'
import { reducer as products } from './products'
import { reducer as cart } from './cart'

export default combineReducers({
  categories,
  products,
  cart,
})
