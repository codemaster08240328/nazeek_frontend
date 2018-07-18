import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CurrentView from './currentView'
import avatar from '../../assets/images/av.png'
class Profile extends Component {
  state = {
    view: ''
  }

  componentDidMount () {
    if(localStorage.getItem('wishlist') === 'wishlist') 
      {
        console.log('wishlist >>>>>>>>>>>>>>',localStorage.getItem('wishlist'))
        localStorage.setItem('wishlist', '');
        this.setState({view: 'wishlist'});
      }
  }

  handleCurrentViewChange = (view) => {
    this.setState({
      view
    })
  }

  render () {
    const { view } = this.state
    const { user, logout } = this.props
    const lang = localStorage.getItem('lang')
    return (
      <React.Fragment>
        <div className='breadcrumb-bar'>
          <div className='container'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'><Link to='/'><i className='icon-home icons' /></Link></li>
              <li className='breadcrumb-item active'>{lang=='ar'?'الصفحة الشخصية':'Profile'}</li>
            </ol>
          </div>
        </div>
        <div className='content-innerPage'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-3 col-md-4 col-sm-5'>
                <div className='box-profile-side'>
                  <div className='bps-head clearfix'>
                    <img src={avatar} alt='' className='avatar-img' />
                    <div className='prof-txt'>
                      <h2>{user.username}</h2>
                      <a onClick={logout} className='logout-link'>{lang=='ar'?'مرحباَ':'Welcome'}</a>
                    </div>
                  </div>
                  <div className='bps-body'>
                    <ul>
                      <li className={view === '' ? 'active' : ''} onClick={() => this.handleCurrentViewChange('')}>
                        <a><span><i className='icon-grid icons' /></span>{lang==='ar'?'حساب الصفحة الرئيسية':'Account Home'}</a>
                      </li>
                      <li className={view === 'presonal-info' ? 'active' : ''} onClick={() => this.handleCurrentViewChange('presonal-info')}>
                        <a ><span><i className='icon-user icons' /></span>{lang=='ar'?'المعلومات الشخصية':'Personal Information'}</a>
                      </li>
                      <li className={view === 'order-history' ? 'active' : ''} onClick={() => this.handleCurrentViewChange('order-history')}>
                        <a ><span><i className='icon-doc icons' /></span>{lang=='ar'?'تاريخ الطلب':'Order History'}</a>
                      </li>
                      <li className={view === 'address-book' ? 'active' : ''} onClick={() => this.handleCurrentViewChange('address-book')}>
                        <a ><span><i className='icon-notebook icons' /></span>{lang == 'ar'?'العنوان الشخصي':'Address book'}</a>
                      </li>
                      <li className={view === 'payment' ? 'active' : ''} onClick={() => this.handleCurrentViewChange('payment')}>
                        <a ><span><i className='icon-credit-card icons' /></span>{lang == 'ar'?'طريقة الدفع':'Way of Payment'}</a>
                      </li>
                      <li className={view === 'wishlist' ? 'active' : ''} onClick={() => this.handleCurrentViewChange('wishlist')}>
                        <a ><span><i className='icon-heart icons' /></span>{lang=='ar'?'قائمة المفضلات':'Wishlist'}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <CurrentView
                view={this.state.view}
                user={user}
                handleCurrentViewChange={this.handleCurrentViewChange}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Profile
