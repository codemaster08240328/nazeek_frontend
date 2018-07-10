import Cart from '../cart'
import { connect } from 'react-redux'
import { getItemsOfCart } from '../../actions/cartActions'
import { deleteCartItem } from '../../actions/cartActions'
import { addToWishList } from '../../actions/wishlistActions'

const mapStateToProps = ({cart}) => {
  const { cartProducts } = cart

  return {
    cartProducts: cartProducts    
  }
}

const mapDispatchToProps = {
  getItemsOfCart,
  addToWishList,
  deleteCartItem
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

