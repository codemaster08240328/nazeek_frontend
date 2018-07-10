import {
    GET_ITEMS_OF_CART_START,
    GET_ITEMS_OF_CART_SUCCESS,
    GET_ITEMS_OF_CART_FAIL,
    GET_ITEMS_COUNT_OF_CART,
    ADD_ITEM_CART_SUCCESS
  } from '../constant/actionsType'
  
  const initialState = {
    isFetching: false,
    cartProducts: [],
    totalCount: 0,
    error: '',
    success: false
  }
  
  export default (state = initialState, { payload,totalCount, type }) => {
    switch (type) {
      case GET_ITEMS_OF_CART_START:
        return {
          ...state,
          isFetching: true,
          error: ''
        }
      case GET_ITEMS_OF_CART_SUCCESS:
        return {
          ...state,
          cartProducts: payload,
          totalCount,
          isFetching: false
        }
      case GET_ITEMS_OF_CART_FAIL:
        return {
          ...state,
          isFetching: false,
          error: payload
        }
      case GET_ITEMS_COUNT_OF_CART:
        return {
          ...state,
          isFetching: false,
          totalCount: payload
        }
      case ADD_ITEM_CART_SUCCESS:
        return {
          ...state,
          success: !state.success
        }
      default:
        return state
    }
  }
  