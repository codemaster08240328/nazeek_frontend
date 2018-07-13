import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import ResetPassForm from '../containers/ResetPassForm'

class resetPass extends Component {

  render () {
    if (this.props.authenticated) {
      return <Redirect to='/' />
    }

    return (
      <React.Fragment>
        <div className='breadcrumb-bar'>
          <div className='container'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'><Link to='/'><i className='icon-home icons' /></Link></li>
              <li className='breadcrumb-item active'>FORGOT PASSWORD</li>
            </ol>
          </div>
        </div>
        <div className='content-innerPage'>
          <div className='container'>
            <div className='sec-head center-head clearfix'>
              <h2 className='sec-title'>FORGOT PASSWORD</h2>
            </div>
            <div className='block-register'>
              <div className='row'>
                <div className='col-md-6 col-sm-10 margin-auto'>
                  <div className='block-form'>
                    <ResetPassForm />
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

export default resetPass
