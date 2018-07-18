import TopHeader from '../common/header/topHeader'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/loginUserActions'
import { withRouter } from 'react-router-dom';
const mapStateToProps = ({auth}) => {
  return {
    authenticated: auth.authenticated,
    user: auth.user
  }
}

const mapDispatchToProps = {
  logoutUser
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopHeader))
