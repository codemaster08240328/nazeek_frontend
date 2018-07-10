import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGOUT_USER,
  GET_USER_PROFILE_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAIL,
  UPDATE_USER_PROFILE_SUCCESS
} from '../constant/actionsType'

const initialState = {
  userToken: '',
  authenticated: false,
  isFetching: false,
  user: {},
  error: {},
  success: false
}

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case 'RESET_ERRORS':
      return {
        ...state,
        error: ''
      }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        userToken: payload,
        authenticated: true
      }
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: payload
      }
    case LOGOUT_USER:
      return {
        ...state,
        authenticated: false,
        userToken: '',
        user: {}
      }
    case REGISTER_USER_SUCCESS:
      return state
    case REGISTER_USER_FAIL:
      return {
        ...state,
        error: payload
      }
    case GET_USER_PROFILE_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: payload
      }
    case GET_USER_PROFILE_FAIL:
      return {
        ...state,
        isFetching: false,
        error: payload
      }
    case UPDATE_USER_PROFILE_SUCCESS:
      return {
        ...state,
        success: !state.success
      }
    default:
      return state
  }
}
