import axios from 'axios'
import {
  GET_USER_PROFILE_START,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAIL,
  UPDATE_USER_PROFILE_SUCCESS
} from '../constant/actionsType'
import { AuthUrls } from '../constant/urls'

const getUserProfileStart = () => {
  return {
    type: GET_USER_PROFILE_START
  }
}

const getUserProfileSuccess = (token) => {
  return {
    type: GET_USER_PROFILE_SUCCESS,
    payload: token
  }
}

const getUserProfileFail = (err) => {
  return {
    type: GET_USER_PROFILE_FAIL,
    payload: err
  }
}
export const getUserProfile = (token) => (dispatch) => {
  
  dispatch(getUserProfileStart())
  if (token) {
    return axios.get(AuthUrls.USER_PROFILE, {
      headers: {
        authorization: 'Token ' + token
      }
    }).then(response => {
      dispatch(getUserProfileSuccess(response.data))
    }).catch((error) => {
      dispatch(getUserProfileFail(error))
    })
  }
}

export const updateUserProfile = (token, data) => (dispatch) => {
  
  dispatch(getUserProfileStart())
  const body = new FormData();
  body.append('full_name', data.name);
  body.append('password', data.pass);
  body.append('email', data.email);
  body.append('mobile', data.mobile);
  body.append('username', data.username);
  const config = {
    url: AuthUrls.USER_PROFILE,
    method: 'put',
    headers: {authorization: 'Token ' + token},
    data: body
  };
  if (token) {
    axios.request(config).then(response => {
      dispatch(getUserProfileSuccess(response.data));
      dispatch({ type: UPDATE_USER_PROFILE_SUCCESS });
      setTimeout(()=>{
        dispatch({ type: UPDATE_USER_PROFILE_SUCCESS });
      },3000)
    }).catch((error) => {
      dispatch(getUserProfileFail(error))
    })
  }
}
