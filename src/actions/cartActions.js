/* global localStorage, alert */
import axios from 'axios'
import {
  GET_ITEMS_OF_CART_START,
  GET_ITEMS_OF_CART_SUCCESS,
  GET_ITEMS_OF_CART_FAIL,
  GET_ITEMS_COUNT_OF_CART,
  ADD_ITEM_CART_SUCCESS
} from '../constant/actionsType'
import { CartUrls } from '../constant/urls'

const getItemsOfCartStart = () => {
  return {
    type: GET_ITEMS_OF_CART_START
  }
}

const getItemsOfCartSuccess = (products, totalCount) => {
  return {
    type: GET_ITEMS_OF_CART_SUCCESS,
    payload: products,
    totalCount: totalCount
  }
}

const getItemsOfCartFail = (err) => {
  return {
    type: GET_ITEMS_OF_CART_FAIL,
    payload: err
  }
}

const getItemsCountOfCart = (totalCount) => {
  return {
    type: GET_ITEMS_COUNT_OF_CART,
    payload: totalCount,
  }
}

export const creatCart = () => (dispatch) => {
  return axios.get(CartUrls.cart, {})
    .then((result) => {
      localStorage.setItem('cart_token', result.data.token)
    })
}

export const getItemsOfCart = (varId, count) => (dispatch) => {
  const params = {
    cart_user_token: localStorage.getItem('token'),
    item: varId,
    qty: count,
    cart_token: ''
  }
  const cart = creatCart();

  if (localStorage.getItem('cart_token') === null) {
    cart().then(()=>{
      params.cart_token = localStorage.getItem('cart_token');
      axios.get(CartUrls.cart, {params})
      .then((result) => {
        let totalCount = 0;
        result.data.items.map((item, index) => {
          totalCount += item.quantity;
        })
        dispatch(getItemsOfCartSuccess(result.data, totalCount));
        dispatch({type:ADD_ITEM_CART_SUCCESS});
        setTimeout(()=>{
          dispatch({type:ADD_ITEM_CART_SUCCESS});
        },3000)
      })
      .catch(() => {
        dispatch(getItemsOfCartFail)
      })
    })
  }else {
    params.cart_token = localStorage.getItem('cart_token');
      axios.get(CartUrls.cart, {params})
      .then((result) => {
        let totalCount = 0;
        result.data.items.map((item, index) => {
          totalCount += item.quantity
        })
        dispatch(getItemsOfCartSuccess(result.data, totalCount));
        dispatch({type:ADD_ITEM_CART_SUCCESS});
        setTimeout(()=>{
          dispatch({type:ADD_ITEM_CART_SUCCESS});
        },3000)
      })
      .catch(() => {
        dispatch(getItemsOfCartFail)
      })
  }
}

export const deleteCartItem = (cartId, itemId) => {
    return (dispatch) => {
    axios.delete(CartUrls.cartDeleteUrl + cartId + '/' + itemId + '/').then(() => {
      dispatch(getItemsOfCart());
    })
    .catch((err) => {
      dispatch(getItemsOfCartFail(err))
    })
  }
  
}


// export const addItemToCart = (varId, count) => (dispatch) => {
//   const params = {
//     cart_user_token: localStorage.getItem('token'),
//     item: '',
//     qty: '',
//     cart_token: ''
//   }
//   if (localStorage.getItem('cart_token') == null)   creatCart();
//   params.item = varId;
//   params.qty = count;
//   params.cart_token = localStorage.getItem('cart_token');
//   return axios.get(CartUrls.cart, {params})
//     .then((result) => {
//       let totalCount = 0;
//       result.data.items.map((item, index) => {
//         totalCount += item.quantity
//       })
//       dispatch(getItemsCountOfCart(totalCount))
//     })
//     .catch((error) => {
//       dispatch(getItemsOfCartFail(error))
//     })
// }
