import Wishlist from '../profile/wishlist/index'
import { connect } from 'react-redux'
import { getWishListItems, creatwishList, deleteWishlistItem } from '../../actions/wishlistActions'
import { getItemsOfCart } from '../../actions/cartActions'

const mapStateToProps = ({ wishlist }) => {

  return {
    wishlistItems: wishlist.wishListItem
  }
}

const mapDispatchToProps = {
  getWishListItems,
  deleteWishlistItem,
  getItemsOfCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist)
