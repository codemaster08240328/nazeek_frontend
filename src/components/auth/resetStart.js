import React from 'react'
import { Link } from 'react-router-dom'

const resetStart = () => {
  return (
    <React.Fragment>
      <div className='breadcrumb-bar'>
        <div className='container'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'><Link to='/'><i className='icon-home icons' /></Link></li>
            <li className='breadcrumb-item active'>Forgot Password</li>
          </ol>
        </div>
      </div>
      <div className='content-innerPage'>
        <div className='container'>
          <div className='sec-head center-head clearfix'>
            <h2 className='sec-title'>Email sent</h2>
          </div>
          <div className='block-register'>
            <div className='row'>
              <div className='col-md-6 col-sm-10 margin-auto'>
                <div className='block-form'>
                  <h3>
                    Check your email for a message with a link to update your password.
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
