import React, { Component } from 'react'
import OwlCarousel from 'react-owl-carousel'
import ProductDetail from './productDetail'
import { Link } from 'react-router-dom'

import {ROOT_URL} from '../../constant/urls'

class Cart extends Component {

  render () {  
    const { getItemsOfCart, addToWishList, deleteCartItem } = this.props;
    const lang = localStorage.getItem('lang')
    return (
      <React.Fragment>
        <div className='breadcrumb-bar'>
          <div className='container'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'><a href='index.html'><i className='icon-home icons' /></a></li>
              <li className='breadcrumb-item active'>{lang=='ar'?'سلة التسوق':'cart'}</li>
            </ol>
          </div>
        </div>
        <div className='content-innerPage'>
          <div className='container'>
            <div className='sec-head clearfix'>
              <h2 className='sec-title f-left'>{lang=='ar'?'سلة التسوق':'Shopping cart'}</h2>
              <div className='col--right'>
                <a href='#' className='btn-primary-cus'>{lang=='ar'?'تابع التسوق':'Continue Shopping'} <i className='glyphicon glyphicon-share-alt' /></a>
              </div>
            </div>
            <div className='table-responsive'>
              <table className='table table-cart table-st1 table-striped'>
                <thead>
                  <tr>
                    <th className='width-35'>{lang=='ar'?'المنتج':'Product'}</th>
                    <th>{lang=='ar'?'رقم المنتج':'Product ID'}</th>
                    <th>{lang=='ar'?'الكمية':'Quantitiy'}</th>
                    <th>{lang=='ar'?'(سعر المنتج (د.ك':'Item Price'}</th>
                    <th>{lang=='ar'?'(المجموع الفرعي (د.ك':'Subtotal'}</th>
                    <th />
                    <th />
                    <th />
                  </tr> 
                </thead>
                <tbody>
                  {
                    this.props.cartProducts.items &&
                    this.props.cartProducts.items.map((item, index)=>{
                      return(
                        <ProductDetail key={index} item={item} cartId={this.props.cartProducts.cart} getItemsOfCart={getItemsOfCart} addToWishList={addToWishList} deleteCartItem={deleteCartItem}/>
                      )
                    })
                  }
                  
                </tbody>
              </table>
            </div>
            <div className='clearfix'>
              <div className='ch-b-left'>
                <p className='cc-note'>{lang=='ar'?'من خلال الاستمرار في الخروج ، فإنك توافق على شروط الاستخدام وسياسة الخصوصية':'By countinu to checkout you accept of term of use and privecy policy'} </p>
              </div>
              <div className='ch-b-right'>
                <div className='without-div'><i className='icon-doc icons' /><p>{lang=='ar'?'(مجموع (بدون رسوم التوصيل':'TOTAL (without delivry fees)'} : {this.props.cartProducts.subtotal} {lang==='ar'?'د.ك':'KD'}</p></div>
                <div className='cart-action clearfix'>
                  <a href='index.html' className='btn-primary-cus'>{lang=='ar'?'تابع التسوق':'Continue Shopping'} <i className='glyphicon glyphicon-share-alt' /></a>
                  <Link to='/checkout' className='btn-primary-cus primary-cus-active'>{lang=='ar'?'الدفع':'Checkout'}</Link>
                </div>
              </div>
            </div>
            <div className='box-like-product'>
              <div className='sec-head clearfix'>
                <h2 className='sec-title'>{lang=='ar'?'منتجاتك قد تناسب خياراتك':'may be you like this'}</h2>
              </div>
              <OwlCarousel
                className='owl-carousel style-owl like-carousel'
                id='like-product-slider'
                margin={0}
                nav={true}
              >
                <div className='item'>
                  <div className='like-product-item clearfix'>
                    <a href='#' className='lp-thumb'>
                      <img src='assets/images/ku.png' alt='' />
                    </a>
                    <div className='lp-txt'>
                      <p className='desc-p'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                      </p>
                      <div className='star-rating'>
                        <span style={{ width: '60%' }}><strong className='rating'>3</strong> out of 5</span>
                      </div>
                      <span className='pr-sa'>345 DK</span>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div className='like-product-item clearfix'>
                    <a href='#' className='lp-thumb'>
                      <img src='images/ku.png' alt='' />
                    </a>
                    <div className='lp-txt'>
                      <p className='desc-p'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                      </p>
                      <div className='star-rating'>
                        <span style={{ width: '60%' }}><strong className='rating'>3</strong> out of 5</span>
                      </div>
                      <span className='pr-sa'>345 DK</span>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div className='like-product-item clearfix'>
                    <a href='#' className='lp-thumb'>
                      <img src='images/ku.png' alt='' />
                    </a>
                    <div className='lp-txt'>
                      <p className='desc-p'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                      </p>
                      <div className='star-rating'>
                        <span style={{ width: '60%' }}><strong className='rating'>3</strong> out of 5</span>
                      </div>
                      <span className='pr-sa'>345 DK</span>
                    </div>
                  </div>
                </div>
                <div className='item'>
                  <div className='like-product-item clearfix'>
                    <a href='#' className='lp-thumb'>
                      <img src='images/ku.png' alt='' />
                    </a>
                    <div className='lp-txt'>
                      <p className='desc-p'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                      </p>
                      <div className='star-rating'>
                        <span style={{ width: '60%' }}><strong className='rating'>3</strong> out of 5</span>
                      </div>
                      <span className='pr-sa'>345 DK</span>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Cart
