/* global localStorage */
import axios from 'axios'
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER
} from '../constant/actionsType'
import { AuthUrls } from '../constant/urls'
import history from '../utils/historyUtils'
import {getUserProfile} from './userProfileActions'
import { fetchWishlistItemCount } from './wishlistActions'

const loginUserSuccess = (token) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: token
  }
}

const loginUserFail = (err) => {
  return {
    type: LOGIN_USER_FAIL,
    payload: err
  }
}

export const loginUser = (data) => (dispatch) => {
  return axios.post(AuthUrls.LOGIN, data)
    .then((result) => {
      const token = result.data.key;

      dispatch(loginUserSuccess(token));
      localStorage.setItem('token', token);
      dispatch(getUserProfile(token));  
      dispatch(fetchWishlistItemCount())
    })
    .catch((error) => {
      dispatch(loginUserFail(error.response.data));
    })
}

export const socialLoginUser = (data, socailType) => (dispatch) => {
  return axios.post(AuthUrls.SOCIAL_LOGIN + socailType + '/', data)
    .then((result) => {
      const token = result.data.key;

      dispatch(loginUserSuccess(token));
      localStorage.setItem('token', token);
      dispatch(getUserProfile(token));  

    })
    .catch((error) => {
      dispatch(loginUserFail(error.response.data));
    })
}

export const logoutUser = () => (dispatch) => {
  const lang = localStorage.getItem('lang');
  localStorage.clear();
  localStorage.setItem('lang',lang);
  dispatch({
    type: LOGOUT_USER
  })
}

export const activateUserAccount = (data, Null, props) => (dispatch) => {
  const { key } = props.match.params;
  const activateUserUrl = AuthUrls.USER_ACTIVATION;
  const formValues = Object.assign(data, { key });

  return axios.post(activateUserUrl, formValues)
    .then(response => {
      dispatch({
        type: 'ACTIVATE_SUCCESS'
      })

      history.push('/login')
    }).catch((error) => {
      dispatch({
        type: 'ACIVATE_FAIL',
        payload: error
      })
    })
}
