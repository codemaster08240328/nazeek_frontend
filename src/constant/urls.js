// const ROOT_URL = 'http://209.97.132.19:8000/'// 18.197.50.198
// const ROOT_URL = 'http://206.189.177.94:8000/'// live server...
export const ROOT_URL = 'http://192.168.0.101:8080/'
export const FRONT_URL = 'http://localhost:3000/index.html'
export const AuthUrls = {
  LOGIN: `${ROOT_URL}rest-auth/login/`,
  SOCIAL_LOGIN: `${ROOT_URL}rest-auth/social/`,
  SIGNUP: `${ROOT_URL}rest-auth/registration/`,
  CHANGE_PASSWORD: `${ROOT_URL}rest-auth/password/change/`,
  RESET_PASSWORD: `${ROOT_URL}rest-auth/password/reset/`,
  RESET_PASSWORD_CONFIRM: `${ROOT_URL}rest-auth/password/reset/confirm/`,
  USER_ACTIVATION: `${ROOT_URL}rest-auth/registration/verify-email/`,
  USER_PROFILE: `${ROOT_URL}rest-auth/user/`
}

export const ShopUrls = {
  FILTERED_PRODUCTS: `${ROOT_URL}api/products?search=`,
  PRODUCTS: `${ROOT_URL}api/products`,
  CATEGORIES: `${ROOT_URL}api/categories`,
  BRANDS: `${ROOT_URL}api/brands`,
  SELLERS: `${ROOT_URL}api/sellers`,
  ORDER: `${ROOT_URL}api/orders/`
}

export const CartUrls = {
  cart: `${ROOT_URL}api/cart/`,
  userCheckout: `${ROOT_URL}api/user/checkout/`,
  creatAdress: `${ROOT_URL}api/user/address/create/`,
  getAdress: `${ROOT_URL}api/user/address/`,
  userId: `${ROOT_URL}api/user/get/`,
  checkoutUrl: `${ROOT_URL}api/checkout/`,
  getCheckOut: `${ROOT_URL}api/user/checkout/`,
  cartDeleteUrl: `${ROOT_URL}api/cartdelete/`,
  getOrderList: `${ROOT_URL}api/orders/`
}

export const wishListUrl = {
  createList: `${ROOT_URL}api/wishlist/`,
  addtoList: `${ROOT_URL}api/wishlistitems/`,
  getItems: `${ROOT_URL}api/wishlistitems/`,
  getCount: `${ROOT_URL}api/wishlistitemcount/`,
  deleteItem: `${ROOT_URL}api/wishlist/`
}

export const ReviewsUrl = {
  createReview: `${ROOT_URL}api/reviews/`
}

export const SubScribeUrl = {
  sendSubScribeUrl: `${ROOT_URL}api/newsletter/`
}

export const filtersUrl = {
  catagorys: `${ROOT_URL}api/categories/`,
  catagoryitems: `${ROOT_URL}api/categories/`,
  sort: `${ROOT_URL}api/products/?format=json&ordering=`
}

export const searchByUrl = {
  getLists: `${ROOT_URL}api/searchlist/`,
  getProducts: `${ROOT_URL}api/filtered/`
}