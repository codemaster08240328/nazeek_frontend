import Product from '../product/index'
import { connect } from 'react-redux'
import { fetchProduct } from '../../actions/fetchProductActions'
import { getItemsOfCart } from '../../actions/cartActions'
import { addToWishList } from '../../actions/wishlistActions'

const mapStateToProps = ({product, wishlist, cart}) => {
  const { product: Product, isFetching, error } = product;
  const { success } = wishlist;
  const { success: cartSuccess } = cart;
  return {
    product: Product,
    isFetching: isFetching,
    error: error,
    wishlistSuccess: success,
    cartSuccess
  }
}

const mapDsipatchToProps = {
  fetchProduct,
  getItemsOfCart,
  addToWishList
}

export default connect(mapStateToProps, mapDsipatchToProps)(Product)
