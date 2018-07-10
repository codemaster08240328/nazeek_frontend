import axios from 'axios'
import {
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL
} from '../constant/actionsType'
import { ShopUrls } from '../constant/urls'

export const fetchProductsStart = () => {
  return {
    type: FETCH_PRODUCTS_START
  }
}

export const fetchProductsSuccess = (products) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
  }
}

const fetchProductsFail = (err) => {
  return {
    type: FETCH_PRODUCTS_FAIL,
    payload: err
  }
}

export const fetchProducts = (filter="") => (dispatch) => {
  dispatch(fetchProductsStart())

  axios.get(ShopUrls.FILTERED_PRODUCTS+filter, {})
    .then((result) => {
      if (result.status >= 400) {
        throw new Error('Error!')
      }
      dispatch(fetchProductsSuccess(result.data))
    })
    .catch((err) => dispatch(fetchProductsFail(err)))
}
