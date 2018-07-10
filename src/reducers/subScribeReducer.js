import {
    SEND_SUBSCRIBE_FAIL,
    SEND_SUBSCRIBE_SUCCESS,
    SEND_SUBSCRIBE_STRAT
} from '../constant/actionsType'
  
const initialState = {
    isFetching: false,
    success: false,
    error: ''
}

export default (state = initialState, { payload, type }) => {
    switch (type) {
      case SEND_SUBSCRIBE_STRAT:
        return {
          ...state,
          isFetching: true,
        }
      case SEND_SUBSCRIBE_SUCCESS:
        return {
          ...state,
          success: !state.success,
          isFetching: false
        }
      case SEND_SUBSCRIBE_FAIL:
        return {
          ...state,
          isFetching: false,
          error: payload
        }
      default:
        return state
    }
}