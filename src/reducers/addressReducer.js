import {
  GET_ADDRESS_START,
  GET_ADDRESS_SUCCESS,
  GET_ADDRESS_FAIL,
  CREATE_ADDRESS_SUCCESS
} from '../constant/actionsType'

const initialState = {
  isFetching: false,
  addresses: [],
  error: ''
}

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case GET_ADDRESS_START:
      return {
        ...state,
        isFetching: true,
      }
    case GET_ADDRESS_SUCCESS:
      return {
        ...state,
        addresses: payload,
        isFetching: false
      }
    case GET_ADDRESS_FAIL:
      return {
        ...state,
        isFetching: false,
        error: payload
      }
    case CREATE_ADDRESS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        addresses: state.addresses.concat(payload),
      }
    default:
      return state
  }
}
