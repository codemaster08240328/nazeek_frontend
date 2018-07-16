import axios from 'axios'
import {
  // FETCH_DUMMY_PAGES_START,
  FETCH_DUMMY_PAGES_SUCCESS,
  FETCH_DUMMY_PAGES_FAIL
} from '../constant/actionsType'

export const getDummyPages = () => (dispatch) => {
  axios.get('http://178.128.15.1/api/dummy/', {})
    .then((result) => {
      dispatch({
        type: FETCH_DUMMY_PAGES_SUCCESS,
        payload: result.data
      })
    })
    .catch((err) => {
      console.log(err)
    })
}
