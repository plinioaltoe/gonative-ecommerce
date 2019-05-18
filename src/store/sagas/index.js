import { all, takeLatest } from 'redux-saga/effects'
import { CategoriesTypes } from '../ducks/categories'
import { ProductsTypes } from '../ducks/products'
import { load as loadCategories } from './categories'
import { load as loadProducts } from './products'

export default function* rootSaga() {
  yield all([takeLatest(CategoriesTypes.LOAD_CATEGORIES_REQUEST, loadCategories)])
  yield all([takeLatest(ProductsTypes.LOAD_PRODUCTS_REQUEST, loadProducts)])
}
