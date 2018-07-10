import {
    GET_CHECKOUT_FAIL,
    GET_CHECKOUT_START,
    GET_CHECKOUT_SUCCESS,
    GET_ORDER_LISTS_SUCCESS
  } from '../constant/actionsType'
  
  const initialState = {
    isFetching: false,
    order: null,
    orderlist: [],
    error: ''
  }
  
  export default (state = initialState, { payload, type }) => {
    switch (type) {
        case GET_CHECKOUT_START:
            return {
            ...state,
            isFetching: true,
            }
        case GET_CHECKOUT_SUCCESS:
            return {
            ...state,
            order: payload,
            isFetching: false
            }
        case GET_CHECKOUT_FAIL:
            return {
            ...state,
            isFetching: false,
            error: payload
            }
        case GET_ORDER_LISTS_SUCCESS:
            return {
            ...state,
            isFetching: false,
            orderlist: payload
            }
        default:
            return state
    }
  }
  