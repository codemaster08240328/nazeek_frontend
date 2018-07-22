import axios from 'axios'
import { CartUrls } from '../constant/urls'
import {
  GET_ADDRESS_START,
  GET_ADDRESS_SUCCESS,
  GET_ADDRESS_FAIL,
  CREATE_ADDRESS_SUCCESS
} from '../constant/actionsType'

const getAddressFail = (err) => {
  return {
    type: GET_ADDRESS_FAIL,
    payload: err
  }
}

const getAddressStart = () => {
  return {
    type: GET_ADDRESS_START,
  }
}

const getAddressSuccess = (address) => {
  return {
    type: GET_ADDRESS_SUCCESS,
    payload: address
  }
}

const createAddressSuccess = (address) => {
  return {
    type: CREATE_ADDRESS_SUCCESS,
    payload: address
  }
}

export const creatCheckOut = () => {
  const body = new FormData();
  body.append('token', localStorage.getItem('token'));
  const config = {
    url: CartUrls.getCheckOut,
    method: 'post',
    data: body
  };
  axios.request(config)
    .then((result) => {
      localStorage.setItem('checkout_token', result.data.user_checkout_token)
    })
}


export const createAddress = (data) => (dispatch) => {
  // dispatch(getAddressStart());
  axios.get(CartUrls.userId + '?checkout_token=' + localStorage.getItem('checkout_token')).then((res)=>{
    const body = new FormData();
    body.append('user', res.data[0].pk);
    body.append('type', data.type);
    body.append('street', data.street);
    body.append('city', data.city);
    body.append('zipcode', data.zipcode);
    const config = {
      url: CartUrls.creatAdress,
      method: 'post',
      data: body
    };
    axios.request(config)
    .then((result) => {
      if (result.status >= 400) {
        throw new Error('Error!')
      }
      dispatch(createAddressSuccess(result.data))
    })
    .catch((err) => dispatch(getAddressFail(err)))
  }).catch((err)=>{
    dispatch(getAddressFail(err))
  })
}

export const getAdresses = () => (dispatch) => {
  // dispatch(getAddressStart());
  const checkout = creatCheckOut();
  if (localStorage.getItem('checkout_token') === null){
    const body = new FormData();
    body.append('token', localStorage.getItem('token'));
    const config = {
      url: CartUrls.getCheckOut,
      method: 'post',
      data: body
    };
    axios.request(config)
      .then((result) => {
        localStorage.setItem('checkout_token', result.data.user_checkout_token);
        axios.get(CartUrls.getAdress + '?checkout_token=' + result.data.user_checkout_token)
        .then((res) => {
          dispatch(getAddressSuccess(res.data))
        }).catch((err) => {        
          getAddressFail(err)
        })
      })
      
  } else {
    axios.get(CartUrls.getAdress+'?checkout_token='+localStorage.getItem('checkout_token'))
    .then((res) => {
      dispatch(getAddressSuccess(res.data))
    }).catch((err) => {        
      getAddressFail(err)
    })
  }
}

