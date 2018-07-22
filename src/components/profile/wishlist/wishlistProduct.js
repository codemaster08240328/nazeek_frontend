import React from 'react'

const WishlistProduct = ({ product, deleteWishlistItem, getItemsOfCart }) => {
  const lang = localStorage.getItem('lang')
  return (
    <tr>
      <td>
        <div className='t-prItem clearfix'>
          <a href='#' className='tp-thumb'>
            <img src={`data:image/jpg;base64, ${product.variation_set[0].productvarimage_set.image?product.variation_set[0].productvarimage_set.image:product.variation_set[0].product.image}`} alt='' className='img-responsive' />
          </a>
          <div className='tp-desc'>
            <p className='desc-p'>
              {product.variation_set[0].product.title}
            </p>
            <div className='star-rating'>
              <span style={{ width: '60%' }}><strong className='rating'>3</strong> out of 5</span>
            </div>
            <span className='pr-sa'>{product.variation_set[0].price} {lang==='ar'?'د.ك':'KD'}</span>
          </div>
        </div>
      </td>
      <td>{product.variation_set[0].product.seller_name}</td>
      <td>#{product.variation_set[0].id}</td>
      <td>{product.variation_set[0].price}</td>
      <td>
        <a href='javascript:void(0)' className='caart-icon' onClick={()=>{getItemsOfCart(product.variation_set[0].id, 1)}}><i className='icon-basket icons' /></a>
      </td>
      <td>
        <a href='javascript:void(0)' className='address-remove' onClick={()=>{deleteWishlistItem(product)}}><i className='icon-close icons' /></a>
      </td>
    </tr>
  )
}

export default WishlistProduct
