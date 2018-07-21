import React from 'react'
import { Link } from 'react-router-dom'

const RecentProduct = ({product}) => {
  const lang = localStorage.getItem('lang')
  return (
    <div className='recent-item clearfix'>
      <Link to={`/products/${product.id}`} className='recThumb'>
        <img src={`data:image/jpg;base64, ${product.image}`} alt='' className='img-responsive Thumb-main' />
        <img src={`data:image/jpg;base64, ${product.image}`} alt='' className='img-responsive Thumb-hover' />
      </Link>
      <div className='recTxt'>
        <p className='re-salary'>
          <span className='sa-new'>{product.price} {lang==='ar'?'د.ك':'KD'}</span>
          <span className='sa-old'>{product.price} {lang==='ar'?'د.ك':'KD'}</span>
        </p>
        <p className='desc-p'>
          {lang==='ar'?'لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.':product.description}
        </p>
        <div className='star-rating'>
          <span style={{ width: '60%' }}><strong className='rating'>3</strong> out of 5</span>
        </div>
        <a href='#' className='addCart'>{lang=='ar'?'أضف الى السلة':'Add To Cart'}</a>
        <div className='label-xs'>{lang=='ar'?'العروض':'offers'}</div>
      </div>
      <a href='#' className='favorite-pro-btn'><i className='icon-heart icons' /></a>
    </div>
  )
}

export default RecentProduct
