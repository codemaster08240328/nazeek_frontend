import React from 'react'
import { Link } from 'react-router-dom'
const TopHeader = ({ authenticated, logoutUser, user }) => {

  const handleLang = ()=>{
    if(localStorage.getItem('lang') === 'ar'){
      localStorage.setItem('lang', 'en');
    }else{
      localStorage.setItem('lang', 'ar')
    }
  }

  const lang = localStorage.getItem('lang')

  return (
    <div className='header-top'>
      <div className='container'>
        <ul className='topHmenu-left clearfix'>
          <li><a href='contact.html'><i className='fa fa-envelope-o' aria-hidden='true' />mail@mail.com</a></li>
          <li><i className='fa fa-mobile' aria-hidden='true' />+965-444-444-444</li>
        </ul>        
        <ul className='topHmenu-right clearfix'>
          <div style={{display: 'flex', marginBottom:'5px'}}>
          {

            authenticated
              ? <React.Fragment>
                <li>
                  <Link to='/' onClick={logoutUser}>
                    <i className='icon-user-follow icons' />{lang=='ar'?'تسجيل الخروج':'Logout'}
                  </Link>
                </li>
                <li>
                  <Link to='/profile'>
                    <i className='icon-user-follow icons' />{lang=='ar'?'الصفحة الشخصية':'Profile'}
                  </Link>
                </li>
              </React.Fragment>
              : <React.Fragment>
                <li>
                  <Link to='/register'>
                    <i className='icon-user-follow icons' />{lang=='ar'?'تسجيل':'Register'}
                  </Link>
                </li>
                <li>
                  <Link to='/login'>
                    <i className='icon-login icons' />{lang=='ar'?'تسجيل الدخول':'Signin'}
                  </Link>
                </li>
              </React.Fragment>
          }

          <li>
            
            <a href='index.html' onClick={handleLang}><i className='icon-globe icons' />{lang=='ar'?'English':'Arabic'}</a>
          </li>
          </div>
          <div className='header-username'>
            {user.username && <span>{lang=='ar'?'مرحباَ':'Welcome'} {user.username}</span>}
          </div>
        </ul>
        
      </div>
    </div>
  )
}

export default TopHeader
