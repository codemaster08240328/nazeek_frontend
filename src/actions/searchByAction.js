import axios from 'axios'
import {
    GET_SEARCH_BY_PRODUCTS_START,
    GET_SEARCH_BY_PRODUCTS_FAIL,
    GET_SEARCH_BY_PRODUCTS_SUCCESS,
    GET_SEARCH_BY_LISTS_SUCCESS
} from '../constant/actionsType'
import { searchByUrl } from '../constant/urls'
import { fetchProductsStart, fetchProductsSuccess } from './fetchProductsActions'

const getSearchByProductsStart = () => {
  return {
    type: GET_SEARCH_BY_PRODUCTS_START
  }
}

const getSearchByProductsSuccess = (product) => {
  return {
    type: GET_SEARCH_BY_PRODUCTS_SUCCESS,
    payload: product
  }
}

const getSearchByListsSuccess = (product) => {
    return {
      type: GET_SEARCH_BY_LISTS_SUCCESS,
      payload: product
    }
}

const getSearchByProductsFail = (err) => {
  return {
    type: GET_SEARCH_BY_PRODUCTS_FAIL,
    payload: err
  }
}

export const getSearchByLists = () => (dispatch) => {
  dispatch(getSearchByProductsStart());

  axios.get(searchByUrl.getLists, {})
    .then((result) => {
      if (result.status >= 400) {
        throw new Error('Error!')
      }

      dispatch(getSearchByListsSuccess(result.data))
    })
    .catch((err) => dispatch(getSearchByProductsFail(err)))
}

export const getSearchByProducts = (searchItem, itemId) => (dispatch) => {
  // dispatch(fetchProductsStart());
  const body = new FormData();
  body.append('search_item', searchItem);
  body.append('item_id', itemId);
  const config = {
    url: searchByUrl.getProducts,
    method: 'post',
    data: body
  };

  axios.request(config)
    .then((result) => {
      if (result.status >= 400) {
        throw new Error('Error!')
      }

      dispatch(fetchProductsSuccess(result.data.product_set))
    })
    .catch((err) => dispatch(getSearchByProductsFail(err)))
}
