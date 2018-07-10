import axios from 'axios'
import { SubScribeUrl } from '../constant/urls'
import {
  SEND_SUBSCRIBE_FAIL,
  SEND_SUBSCRIBE_SUCCESS,
  SEND_SUBSCRIBE_STRAT
} from '../constant/actionsType'

const sendSubscribeFail = (err) => {
    return {
      type: SEND_SUBSCRIBE_FAIL,
      payload: err
    }
}

const sendSubscribeStart = () => {
    return {
      type: SEND_SUBSCRIBE_STRAT,
    }
}

const sendSubscribeSuccess = (order) => {
    return {
      type: SEND_SUBSCRIBE_SUCCESS,
      payload: order
    }
}

export const sendSubscribe = (email) => (dispatch) => {
    const body = new FormData();
    body.append('email', email);
    const config = {
      url: SubScribeUrl.sendSubScribeUrl,
      method: 'post',
      data: body
    };
    axios.request(config)
    .then((result) => {
        if (result.status >= 400) {
            throw new Error('Error!')
        }
        dispatch(sendSubscribeSuccess());
        setTimeout(()=>{
            dispatch(sendSubscribeSuccess());
        },3000)
    })
    .catch((err) => dispatch(sendSubscribeFail(err)))
}