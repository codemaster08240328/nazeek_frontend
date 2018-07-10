import TopHeader from '../common/header/topHeader'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/loginUserActions'

const mapStateToProps = ({auth}) => {
  return {
    authenticated: auth.authenticated,
    user: auth.user
  }
}

const mapDispatchToProps = {
  logoutUser
}

export default connect(mapStateToProps, mapDispatchToProps)(TopHeader)
