import axios from 'axios'
import {
  PASSWORD_RESET_FAIL,
  PASSWORD_RESET_SUCCESS
} from '../constant/actionsType'
import { AuthUrls } from '../constant/urls'
import history from '../utils/historyUtils'

const resetPasswordSuccess = (user) => {
  history.push('/reset-password-confirm')
  return {
    type: PASSWORD_RESET_SUCCESS
  }
}

const resetPasswordFail = (err) => {
  return {
    type: PASSWORD_RESET_FAIL,
    payload: err
  }
}

export const resetPassConfirm = (data) => (dispatch) => {
  axios.post(AuthUrls.RESET_PASSWORD, data)
    .then((result) => {
      history.push('/reset-password-confirm')
    })
    .catch((err) => {
      dispatch(resetPasswordFail(err.response.data))
    })
}

export const resetPassword = (data, Null, props) => (dispatch) => {
  
  const { key } = props.match.params;
  const activateUserUrl = AuthUrls.RESET_PASSWORD_CONFIRM;
  const formValues = Object.assign(data, { key });

  return axios.post(activateUserUrl, formValues)
    .then(response => {
      history.push('/login')
    }).catch((error) => {
      dispatch({
        type: 'ACIVATE_FAIL',
        payload: error
      })
    })
}
