import React from 'react'
import { Link } from 'react-router-dom'

const NewArrivalProduct = ({ product, addToWishList }) => {
  const lang = localStorage.getItem('lang')
  return (
    <div className='product-item'>
      <Link to={`/products/${product.id}`} className='proThumb'>
        <img src={`data:image/jpg;base64, ${product.image}`} alt='' className='img-responsive Thumb-main' />
        <img src={`data:image/jpg;base64, ${product.image}`} alt='' className='img-responsive Thumb-hover' />
      </Link>
      <div className='proTxt'>
        <p className='re-salary'><span className='sa-new'>{product.price} {lang==='ar'?'د.ك':'KD'}</span></p>
        <p className='desc-p'>{lang==='ar'?'لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.':product.description}</p>
        <a href='#' className='addCart'>{lang=='ar'?'أضف الى السلة':'Add To Cart'}</a>
      </div>
      <a onClick={() => addToWishList(product)} className='favorite-pro-btn'><i className='icon-heart icons' /></a>
    </div>
  )
}

export default NewArrivalProduct
