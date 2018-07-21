import React from 'react'
import { Link } from 'react-router-dom'

const OffersSliderItem = ({ product }) => {
  const lang = localStorage.getItem('lang')

  return (
    <div className='item'>
      <div className='offer-item'>
        <div className='offer-top clearfix'>
          <div className='offer-desc'>
            <p className='re-salary'>
              <span className='sa-new'>{product.price} {lang==='ar'?'د.ك':'KD'}</span>
              <span className='sa-old'>{product.price} {lang==='ar'?'د.ك':'KD'}</span>
            </p>
            <p className='desc-p'>
              {lang==='ar'?'لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.':product.description}
            </p>
          </div>
          <div className='save-circle'><p>{lang==='ar'?'حفظ':'save'}<span>15: {lang==='ar'?'د.ك':'KD'}</span></p></div>
        </div>
        <div className='offer-bottom'>
          <Link to={`/products/${product.id}`} className='offerThumb'>
            <img src={`data:image/jpg;base64, ${product.image}`} alt='' className='img-responsive' />
          </Link>
          <a href='#' className='favorite-pro-btn'><i className='icon-heart icons' /></a>
          <div className='add-div'>
            <a href='#' className='addCart'>{lang=='ar'?'أضف الى السلة':'Add To Cart'}</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OffersSliderItem
