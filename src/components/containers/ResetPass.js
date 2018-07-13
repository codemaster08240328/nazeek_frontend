import resetPass from '../resetPass'
import { connect } from 'react-redux'


const mapStateToProps = ({auth}) => {
  return {
    authenticated: auth.authenticated
  }
}

export default connect(mapStateToProps, null)(resetPass)

