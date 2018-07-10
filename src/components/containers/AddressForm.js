import AddressForm from '../profile/address/addressForm'
import { connect } from 'react-redux'
import { createAddress } from '../../actions/addressActions'

const mapDipatchToProps = {
  createAddress
}

export default connect(null, mapDipatchToProps)(AddressForm)
