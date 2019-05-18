import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/**
 * Action Types & Creators
 */
const { Types, Creators } = createActions({
  loadProductsRequest: ['id'],
  loadProductsSuccess: ['data'],
  loadProductsFailure: null,
})

export const ProductsTypes = Types
export default Creators

/**
 * Reducers
 */
const INITIAL_STATE = Immutable({
  loading: false,
  data: [],
  error: null,
})

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD_PRODUCTS_REQUEST]: state => state.merge({ loading: true }),
  [Types.LOAD_PRODUCTS_SUCCESS]: (state, { data }) => state.merge({
    data,
    loading: false,
    error: null,
  }),
  [Types.LOAD_PRODUCTS_FAILURE]: (state, { error }) => state.merge({ loading: false, error }),
})
