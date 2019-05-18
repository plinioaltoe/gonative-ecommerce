import { call, put } from 'redux-saga/effects'
import api from '~/services/api'
import ProductsActions from '~/store/ducks/products'

export function* load({ id }) {
  try {
    const { data } = yield call(api.get, `/category_products/${id}`)
    yield put(ProductsActions.loadProductsSuccess(data.products))
  } catch (error) {
    const erroMsg = 'Erro ao adicionar produtos'

    yield put(ProductsActions.loadProductsFailure(erroMsg))
  }
}
