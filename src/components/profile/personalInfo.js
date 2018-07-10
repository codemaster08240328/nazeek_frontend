import React from 'react'
import { connect } from 'react-redux'
import { updateUserProfile } from '../../actions/userProfileActions'
import Alert from '../alert/alert'

class PersonalInfo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: props.user.full_name,
      pass: 'password',
      email: props.user.email,
      mobile: props.user.mobile,
      nameFlag: true,
      passFlag: true,
      emailFlag: true,
      mobileFlag: true,
      saveBtnClass: 'userSaveDisable',
      SaveFlag: true,
      username: props.user.username
    }
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChangeValue = this.handleChangeValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeValue(e){
    const { value, name } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleEdit(value){
    this.setState({
      [value]: false,
      saveBtnClass:'userSaveActive',
      SaveFlag: false
    })
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.updateUserProfile(this.props.token, this.state)

  }

  render(){
    return (
      <div className='col-lg-9 col-md-8 col-sm-7'>
        <div className='sec-head clearfix'>
          <h2 className='sec-title f-left'>Personal Information</h2>
        </div>
        <div className='sec-warpper'>
          <div className='row'>
            <div className='col-lg-7 col-md-11 col-sm-12'>
              <form className='form-st1' onSubmit={this.handleSubmit}>
                <div className='form-group row'>
                  <label className='col-sm-3 control-label'>Full Name</label>
                  <div className='col-sm-9'>
                    <div className='control--group input-edit'>
                      <input type='text' className='form-control' name='name' value={this.state.name} onChange={this.handleChangeValue} disabled={this.state.nameFlag} required/>
                      <span className='fc-icon'><i className='icon-user icons' /></span>
                      <span className='edit-btnInput' onClick={()=>this.handleEdit('nameFlag')}><i className='zmdi zmdi-border-color' /></span>
                    </div>
                  </div>
                </div>
                <div className='form-group row'>
                  <label className='col-sm-3 control-label'>Password</label>
                  <div className='col-sm-9'>
                    <div className='control--group input-edit'>
                      <input type='password' className='form-control' name='pass' value={this.state.pass} onChange={this.handleChangeValue} disabled={this.state.passFlag} required/>
                      <span className='fc-icon'><i className='icon-lock-open icons' /></span>
                      <span className='edit-btnInput' onClick={()=>this.handleEdit('passFlag')}><i className='zmdi zmdi-border-color' /></span>
                    </div>
                  </div>
                </div>
                <div className='form-group row'>
                  <label className='col-sm-3 control-label'>Email</label>
                  <div className='col-sm-9'>
                    <div className='control--group input-edit'>
                      <input type='email' className='form-control' name='email' value={this.state.email} onChange={this.handleChangeValue} disabled={this.state.emailFlag} required/>
                      <span className='fc-icon'><i className='icon-envelope icons' /></span>
                      <span className='edit-btnInput' onClick={()=>this.handleEdit('emailFlag')}><i className='zmdi zmdi-border-color' /></span>
                    </div>
                  </div>
                </div>
                <div className='form-group row'>
                  <label className='col-sm-3 control-label'>Mobile</label>
                  <div className='col-sm-9'>
                    <div className='control--group input-edit'>
                      <input type='text' className='form-control' name='mobile' value={this.state.mobile} onChange={this.handleChangeValue} disabled={this.state.mobileFlag} />
                      <span className='fc-icon'><i className='icon-screen-smartphone icons' /></span>
                      <span className='edit-btnInput' onClick={()=>this.handleEdit('mobileFlag')}><i className='zmdi zmdi-border-color' /></span>
                    </div>
                  </div>
                </div>
                <div >
                  <input type='submit' className={this.state.saveBtnClass} value='Save' disabled={this.state.SaveFlag}/>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Alert message="Your personal infomations are updated successfully" visible={this.props.success}/>
      </div>

    )
  }
}

const mapStateToProps = ({auth}) => {
  return {
    token: auth.userToken,
    user: auth.user,
    success: auth.success
  }
}

const mapDispatchToProps = {
  updateUserProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo)
