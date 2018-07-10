import Address from '../profile/address/addressBook'
import { connect } from 'react-redux'
import { getAdresses } from '../../actions/addressActions'

const mapStateToProps = ({address}) => {
  const { addresses, isFetching } = address;
  return {
    addresses,
    isFetching
  }
}

const mapDispatchToProps = {
  getAdresses
}

export default connect(mapStateToProps, mapDispatchToProps)(Address)
