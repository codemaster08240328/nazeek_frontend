import React from 'react'
import { Link } from 'react-router-dom'

const resetStart = () => {
  const lang = localStorage.getItem('item')
  return (
    <React.Fragment>
      <div className='breadcrumb-bar'>
        <div className='container'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'><Link to='/'><i className='icon-home icons' /></Link></li>
            <li className='breadcrumb-item active'>{lang==='ar'?'كلمه السرنسيت':'Forgot Password'}</li>
          </ol>
        </div>
      </div>
      <div className='content-innerPage'>
        <div className='container'>
          <div className='sec-head center-head clearfix'>
            <h2 className='sec-title'>{lang==='ar'?'البريد الإلكتروني أرسلت':'Email sent'}</h2>
          </div>
          <div className='block-register'>
            <div className='row'>
              <div className='col-md-6 col-sm-10 margin-auto'>
                <div className='block-form'>
                  <h3>
                    {lang==='ar'?'تحقق من بريدك الإلكتروني بحثًا عن رسالة تحتوي على رابط لتحديث كلمة المرور الخاصة بك.':'Check your email for a message with a link to update your password.'}
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

export default resetStart
