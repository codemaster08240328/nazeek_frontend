import Login from '../login'
import { connect } from 'react-redux'
import { socialLoginUser } from '../../actions/loginUserActions'
const mapStateToProps = ({auth}) => {
  return {
    authenticated: auth.authenticated
  }
}

const mapDsipatchToProps = {
  SocailLogin: socialLoginUser
}

export default connect(mapStateToProps, mapDsipatchToProps)(Login)


