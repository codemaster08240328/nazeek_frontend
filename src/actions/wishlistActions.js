/* global alert */

import { wishListUrl } from '../constant/urls'
import history from '../utils/historyUtils'
import axios from 'axios'
import {
  GET_WISHLIST_COUNT,
  GET_WISHLIST_ITEMS,
  GET_WISHLIST_ID,
  DELETE_WISHLIST_ITEM,
  ADD_WISHLIST_ITEM
} from '../constant/actionsType'

export const creatwishList = () => {
  return (dispatch) => {
    if (window.localStorage.getItem('token') === null) {
      history.push('/login')
    }
    return axios.get(wishListUrl.createList + '?token=' + window.localStorage.getItem('token'))
      .then(response => {
        dispatch({type: GET_WISHLIST_ID, id: response.data.whishlist_id})
        return response.data
      })
  }
}

export const addToWishList = (product) => {
  return (dispatch, getState) => {
    if (window.localStorage.getItem('token') === null) {
      history.push('/login')
    }

    var wishlist = creatwishList();
    wishlist(dispatch)
      .then(res => {
        let isFound = false;
        const wishListId = res.whishlist_id;
        const items = getWishListItems();
        items(dispatch)
          .then(res => {
            res.map(item => {
              if (product.id === item.product) {
                isFound = true
              }
            })
            setTimeout(() => {
              if (isFound === false) {
                const body = new FormData();
                body.append('product', product.id);
                body.append('quantity', 1);
                const config = {
                  url: wishListUrl.addtoList + '?token=' + window.localStorage.getItem('token'),
                  method: 'post',
                  data: body
                };
                axios.request(config).then(response => {
                  var Count = fetchWishlistItemCount();
                  Count(dispatch).then(response => {
                    dispatch({type:ADD_WISHLIST_ITEM});
                    setTimeout(()=>{
                      dispatch({type:ADD_WISHLIST_ITEM});
                    },3000)
                  })
                }).catch(err => {
                  console.log('err', err)
                })
              } else {
                alert(' the product in wishList')
              }
            }, 2000)
          })
      })
  }
}

export const getWishListItems = () => {
  return (dispatch) => {
    return axios.get(wishListUrl.getItems + '?token=' + window.localStorage.getItem('token'))
      .then(response => {
        dispatch({type: GET_WISHLIST_ITEMS, items: response.data})
        return response.data
      })
  }
}

export const fetchWishlistItemCount = () => {

  return (dispatch) => {
    return axios.get(wishListUrl.getCount + '?token=' + window.localStorage.getItem('token')).then(response => {
      dispatch({type: GET_WISHLIST_COUNT, count: response.data.item_count})
      return response.data
    })
  }
}

export const deleteWishlistItem = (item) => {
  return (dispatch) => {
    axios.delete(wishListUrl.deleteItem + item.wishlist + '/wishlistitems/' + item.variation_set[0].id + '/?token=' + window.localStorage.getItem('token')).then(response => {
      dispatch({type: DELETE_WISHLIST_ITEM, item: response.data})
    })

    setTimeout(() => {
      var items = getWishListItems()
      items(response => {
        dispatch({type: GET_WISHLIST_ITEMS, items: response.items})
      })
      var count = fetchWishlistItemCount()
      count(res => {
        dispatch({type: GET_WISHLIST_COUNT, count: res.count})
      })
    }, 300)
  }
}
