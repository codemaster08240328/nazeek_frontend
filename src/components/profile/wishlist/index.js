import React, { Component } from 'react'
import WishlistProduct from './wishlistProduct'

class Wishlist extends Component {
  componentDidMount () {
    const { getWishListItems } = this.props
    getWishListItems()
  }

  render () {
    const lang = localStorage.getItem('lang')
    const { wishlistItems } = this.props

    return (
      <div className='col-lg-9 col-md-8 col-sm-7'>
        <div className='sec-head clearfix'>
          <h2 className='sec-title f-left'>{lang==='ar'?'قائمة المفضلات':'Wishlist'}</h2>
        </div>
        <div className='sec-warpper'>
          <div className='table-responsive'>
            <table className='table table-st1 wishlist-table table-cart table-striped'>
              <thead>
                <tr>
                  <th className='th-product'>{lang==='ar'?'المنتج':'Product'}</th>
                  <th>{lang==='ar'?'اسم المحل':'Shop Name'}</th>
                  <th>{lang==='ar'?'معرف العنصر':'Item ID'}</th>
                  <th>{lang==='ar'?'السعر':'Price'}({lang==='ar'?'د.ك':'KD'})</th>
                </tr>
              </thead>
              <tbody>
                {
                  wishlistItems.map((item, index) => {
                    return <WishlistProduct product={item} key={index} deleteWishlistItem={this.props.deleteWishlistItem} getItemsOfCart={this.props.getItemsOfCart}/>
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Wishlist
