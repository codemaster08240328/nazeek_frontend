import React from 'react'
import { Link } from 'react-router-dom'

const SignUpDone = () => {
  const lang = localStorage.getItem('lang');
  return (
    <React.Fragment>
      <div className='breadcrumb-bar'>
        <div className='container'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'><Link to='/'><i className='icon-home icons' /></Link></li>
            <li className='breadcrumb-item active'>{lang==='ar'?'التسجيل تم':'Register Done'}</li>
          </ol>
        </div>
      </div>
      <div className='content-innerPage'>
        <div className='container'>
          <div className='sec-head center-head clearfix'>
            <h2 className='sec-title'>{lang==='ar'?'التسجيل تم':'Registeration Done'}</h2>
          </div>
          <div className='block-register'>
            <div className='row'>
              <div className='col-md-6 col-sm-10 margin-auto'>
                <div className='block-form'>
                  <h3>{lang==='ar'?'شكراً على تسجيلك, يرجى الضغط على الرابط المرسل الى ايميلك لتفعيل حسابك':'Thanks for your registration, please follow the link sent to your provided email to activate your account.'}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default SignUpDone
