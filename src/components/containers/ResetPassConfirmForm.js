import { connect } from 'react-redux'
import { resetPassConfirm } from '../../actions/resetPassActions'
import ResetPassConfirmForm from '../resetPassConfirm/ResetPassConfirmForm';

const mapStateToProps = ({auth}) => {
  return {
    errors: auth.error
  }
}

const mapDsipatchToProps = {
  onSubmit: resetPassConfirm
}

export default connect(mapStateToProps, mapDsipatchToProps)(ResetPassConfirmForm)
