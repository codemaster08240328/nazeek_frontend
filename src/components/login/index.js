import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import SocialButton from './Social'
import LoginForm from '../containers/LoginForm'

class Login extends Component {

  handleSocialLogin = (user, socialType) => {
    let data = { access_token : user.token.accessToken}
    console.log(user);
    this.props.SocailLogin(data, socialType);

  }
   
  handleSocialLoginFailure = (err) => {
    console.error(err)
  }

  render () {
    if (this.props.authenticated) {
      return <Redirect to='/' />
    }
    const lang = localStorage.getItem('lang')
    return (
      <React.Fragment>
        <div className='breadcrumb-bar'>
          <div className='container'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'><Link to='/'><i className='icon-home icons' /></Link></li>
              <li className='breadcrumb-item active'>{lang==='ar'?'تسجيل الدخول':'Login'}</li>
            </ol>
          </div>
        </div>
        <div className='content-innerPage'>
          <div className='container'>
            <div className='sec-head center-head clearfix'>
              <h2 className='sec-title'>{lang==='ar'?'تسجيل الدخول':'Sign in'}</h2>
            </div>
            <div className='block-register'>
              <div className='row'>
                <div className='col-md-6 col-sm-10 margin-auto'>
                  <div className='block-bySocial'>
                    <h3>{lang==='ar'?'التسجيل من خلا مواقع التواصل الإجتماعي أو الايميل':'Sign up with social media'}</h3>
                    <ul className='sign-Social clearfix'>
                      <SocialButton
                        provider='facebook'
                        appId='2113581775562398'
                        onLoginSuccess={(user) => this.handleSocialLogin(user, 'facebook')}
                        onLoginFailure={this.handleSocialLoginFailure}
                        type='Facebook'
                        IconClass='fa fa-facebook'
                        ContainerClass='s-facebook'
                      />
                      <SocialButton
                        provider='google'
                        appId='370530769729-ms5p7b44edo6gv0s82h6itc6b5aormmk.apps.googleusercontent.com'
                        onLoginSuccess={(user) => this.handleSocialLogin(user, 'google')}
                        onLoginFailure={this.handleSocialLoginFailure}
                        type='Google'
                        IconClass='fa fa-google'
                        ContainerClass='s-google'
                      />
                      <SocialButton
                        provider='instagram'
                        appId='2113581775562398'
                        onLoginSuccess={this.handleSocialLogin}
                        onLoginFailure={this.handleSocialLoginFailure}
                        type='Instagram'
                        IconClass='fa fa-instagram'
                        ContainerClass='s-instagram'
                      />
                    </ul>
                  </div>
                  <div className='signOr'><span>OR</span></div>
                  <div className='block-form'>
                    <LoginForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Login
