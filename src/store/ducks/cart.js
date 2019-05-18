import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/**
 * Action Types & Creators
 */
const { Types, Creators } = createActions({
  addProduct: ['data'],
  updateProduct: ['data'],
  rmProduct: ['id'],
})

export const CartTypes = Types
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
  [Types.ADD_PRODUCT]: (state, { data }) => {
    let productWasFound = false
    const productList = state.data.map((product) => {
      if (product.id === data.id) {
        productWasFound = true
        return product.merge({ quantity: product.quantity + 1 })
      }
      return product
    })

    if (productWasFound) {
      return state.merge({
        data: productList,
        loading: false,
        error: null,
      })
    }

    const newProduct = Object.assign({ quantity: 1 }, data)
    return state.merge({
      data: [...state.data, newProduct],
      loading: false,
      error: null,
    })
  },

  [Types.UPDATE_PRODUCT]: (state, { data }) => {
    const productList = state.data.map((product) => {
      if (product.id === data.id) {
        return product.merge({ quantity: data.newQuantity })
      }
      return product
    })

    return state.merge({
      data: productList,
      loading: false,
      error: null,
    })
  },
  [Types.RM_PRODUCT]: (state, { id }) => state.merge({
    data: state.data.filter(prod => prod.id !== id),
    loading: false,
    error: null,
  }),
})
