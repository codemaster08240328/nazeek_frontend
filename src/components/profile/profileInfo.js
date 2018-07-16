import React from 'react'

const ProfileInfo = ({ handleCurrentViewChange }) => {
  const lang = localStorage.getItem('lang')
  return (
    <div className='col-lg-9 col-md-8 col-sm-7'>
      <div className='sec-head clearfix'>
        <h2 className='sec-title f-left'>{lang=='ar'?'الملف الشخصي':'Profile'}</h2>
      </div>
      <div className='sec-warpper'>
        <div className='profile-blocks-list'>
          <div className='row'>
            <div className='col-md-6 col-sm-12'>
              <a className='profile-block-item' onClick={() => handleCurrentViewChange('presonal-info')}>
                <div className='pbi-head'>
                  <div>{lang=='ar'?'المعلومات الشخصية':'Personal Information'} <span className='pbi-icon'><i className='icon-user icons' /></span></div>
                </div>
                <div className='pbi-body'>
                  <p>{lang=='ar'?'تفحص قائمة الطلبات':'check order status'}</p>
                </div>
              </a>
            </div>
            <div className='col-md-6 col-sm-12'>
              <a className='profile-block-item' onClick={() => handleCurrentViewChange('order-history')}>
                <div className='pbi-head'>
                  <div>{lang=='ar'?'تاريخ الطلب':'Order History'} <span className='pbi-icon'><i className='icon-doc icons' /></span></div>
                </div>
                <div className='pbi-body'>
                  <p>{lang=='ar'?'الملف الشخصي':'Profile'}</p>
                </div>
              </a>
            </div>
            <div className='col-md-6 col-sm-12'>
              <a className='profile-block-item' onClick={() => handleCurrentViewChange('address-book')}>
                <div className='pbi-head'>
                  <div>{lang == 'ar'?'العنوان الشخصي':'Address book'} <span className='pbi-icon'><i className='icon-notebook icons' /></span></div>
                </div>
                <div className='pbi-body'>
                  <p>{lang=='ar'?'إدارة المعلومات الخاصة بك':'Manage your information'}</p>
                </div>
              </a>
            </div>
            <div className='col-md-6 col-sm-12'>
              <a className='profile-block-item' onClick={() => handleCurrentViewChange('wishlist')}>
                <div className='pbi-head'>
                  <div>{lang == 'ar'?'قائمة المفضلات':'Wishlist'} <span className='pbi-icon'><i className='icon-heart icons' /></span></div>
                </div>
                <div className='pbi-body'>
                  <p>{lang == 'ar'?'إدارة قائمة المفضلات لدي':'Manage my wishlist'}</p>
                </div>
              </a>
            </div>
            <div className='col-md-6 col-sm-12'>
              <a className='profile-block-item' onClick={() => handleCurrentViewChange('payment')}>
                <div className='pbi-head'>
                  <div>{lang == 'ar'?'طريقة الدفع':'Way of Payment'} <span className='pbi-icon'><i className='icon-credit-card icons' /></span></div>
                </div>
                <div className='pbi-body'>
                  <p>{lang == 'ar'?'إدارة طرق الدفع المتاحة لدي':'Manage my payment methods'}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProfileInfo
