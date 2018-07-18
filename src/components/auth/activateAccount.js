import React from 'react'
import { Link } from 'react-router-dom'
import { reduxForm } from 'redux-form'

const ActivateAccount = ({ handleSubmit }) => {
  const lang = localStorage.getItem('lang');
  return (
    <React.Fragment>
      <div className='breadcrumb-bar'>
        <div className='container'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'><Link to='/'><i className='icon-home icons' /></Link></li>
            <li className='breadcrumb-item active'>{lang==='ar'?'تفعيل':'Activate'}</li>
          </ol>
        </div>
      </div>
      <div className='content-innerPage'>
        <div className='container'>
          <div className='sec-head center-head clearfix'>
            <h2 className='sec-title'>{lang==='ar'?'تريد تفعيل حسابك':'Activate your account'}</h2>
          </div>
          <div className='block-register'>
            <div className='row'>
              <div className='col-md-6 col-sm-10 margin-auto'>
                <div className='block-bySocial'>
                  <form className='form-st1' onSubmit={handleSubmit}>
                    <h4 className='text-center'>{lang==='ar'?'الرجاء الضغط على الزر الاسفل لتفعيل حسابك':'Please click the button below to activate your account'}</h4>

                    <button type='submit' className='btn btn-submit'>{lang==='ar'?'تفعيل':'Activate'}</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default reduxForm({
  form: 'activate'
})(ActivateAccount)
