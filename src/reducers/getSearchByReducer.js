import {
    GET_SEARCH_BY_PRODUCTS_START,
    GET_SEARCH_BY_PRODUCTS_FAIL,
    GET_SEARCH_BY_PRODUCTS_SUCCESS,
    GET_SEARCH_BY_LISTS_SUCCESS
} from '../constant/actionsType'
  
const initialState = {
    isFetching: false,
    searchByLists: [],
    products:[],
    error: ''
}
  
export default (state = initialState, { payload, type }) => {
    switch (type) {
        case GET_SEARCH_BY_PRODUCTS_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case GET_SEARCH_BY_PRODUCTS_FAIL:
            return {
                ...state,
                isFetching: false,
                error: payload
            }
        case GET_SEARCH_BY_PRODUCTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                products: payload
            }
        case GET_SEARCH_BY_LISTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                searchByLists: payload
            }
        default:
            return state
    }
}
  