import axios from 'axios'
import { CartUrls } from '../constant/urls'
import {
  GET_CHECKOUT_FAIL,
  GET_CHECKOUT_START,
  GET_CHECKOUT_SUCCESS,
  GET_ORDER_LISTS_SUCCESS
} from '../constant/actionsType'

const getCheckoutFail = (err) => {
    return {
      type: GET_CHECKOUT_FAIL,
      payload: err
    }
}

const getCheckoutStart = () => {
    return {
      type: GET_CHECKOUT_START,
    }
}

const getOrderListSuccess = (orderlist) => {
    return {
      type: GET_ORDER_LISTS_SUCCESS,
      payload: orderlist
    }
}

const getCheckoutSuccess = (order) => {
    return {
      type: GET_CHECKOUT_SUCCESS,
      payload: order
    }
}

export const getCheckout = () => (dispatch) => {
    const body = new FormData();
    body.append('checkout_token', localStorage.getItem('checkout_token'));
    body.append('billing_address', 2);
    body.append('shipping_address', 3)
    body.append('cart_token', localStorage.getItem('cart_token'));
    const config = {
      url: CartUrls.checkoutUrl,
      method: 'post',
      data: body
    };
    axios.request(config)
    .then((result) => {
        if (result.status >= 400) {
            throw new Error('Error!')
        }
        dispatch(getCheckoutSuccess(result.data))
    })
    .catch((err) => dispatch(getCheckoutFail(err)))
}

export const getOrderList = () => (dispatch) => {
    axios.get(CartUrls.getOrderList)
    .then((res) => {
        dispatch(getOrderListSuccess(res.data))
    })
    .catch((err) => dispatch(getCheckoutFail(err)))
}