import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/**
 * Action Types & Creators
 */
const { Types, Creators } = createActions({
  loadCategoriesRequest: null,
  loadCategoriesSuccess: ['data'],
  loadCategoriesFailure: null,
})

export const CategoriesTypes = Types
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
  [Types.LOAD_CATEGORIES_REQUEST]: state => state.merge({ loading: true }),
  [Types.LOAD_CATEGORIES_SUCCESS]: (state, { data }) => state.merge({
    data,
    loading: false,
    error: null,
  }),
  [Types.LOAD_CATEGORIES_FAILURE]: (state, { error }) => state.merge({ loading: false, error }),
})
