import MiddleHeader from '../common/header/middleHeader'
import { connect } from 'react-redux'
import { fetchProducts } from '../../actions/fetchProductsActions'
import { getItemsOfCart } from '../../actions/cartActions'
import { fetchWishlistItemCount } from '../../actions/wishlistActions'
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({products, cart, wishlist}) => {
  const { isFetching, error } = products;
  const { totalCount } = cart;
  const { count } = wishlist;

  return {
    isFetching: isFetching,
    totalCount: totalCount,
    error: error,
    count
  }
}

const mapDispatchToProps = {
  fetchProducts,
  getItemsOfCart,
  fetchWishlistItemCount
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MiddleHeader))
