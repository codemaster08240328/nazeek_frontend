import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'

import productsReducer from './productsReducer'
import productReducer from './productReducer'
import categoriesReducer from './caregoriesReducer'
import categorieReducer from './caregorieReducer'
import filterdProductsReducer from './filteredProductsReducer'
import authReducer from './authReducer'
import wishlistReducer from './wishListReducer'
import dummyPages from './dummyPagesReducer'
import addressReducer from './addressReducer'
import cartProductsReducer from './cartProductsReducer'
import getSearchByReducer from './getSearchByReducer'
import checkoutReducer from './checkoutReducer'
import subScribeReducer from './subScribeReducer'

const rootReducer = combineReducers({
  form: formReducer,
  products: productsReducer,
  product: productReducer,
  categories: categoriesReducer,
  categorie: categorieReducer,
  filterdProducts: filterdProductsReducer,
  auth: authReducer,
  wishlist: wishlistReducer,
  dummyPages: dummyPages,
  address: addressReducer,
  cart: cartProductsReducer,
  searchBy: getSearchByReducer,
  checkout: checkoutReducer,
  subscribe: subScribeReducer
})

export default rootReducer
