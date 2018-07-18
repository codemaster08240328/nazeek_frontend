import Home from '../home'
import { connect } from 'react-redux'
import { fetchProducts } from '../../actions/fetchProductsActions'
import { filterProducts } from '../../actions/filterProductsActions'
import { fetchWishlistItemCount } from '../../actions/wishlistActions'

const mapStateToProps = ({products}) => {
  const { isFetching, error } = products

  return {
    isFetching: isFetching,
    error: error
  }
}

const mapDispatchToProps = {
  fetchProducts,
  filterProducts,
  fetchWishlistItemCount
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
