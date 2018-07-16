import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import NewArrivalSlider from './newArrivalsSlider/newArrivalsSlider'
import OffersSlider from './offersSlider/offersSlider'
import YouTube from 'react-youtube';

const NewArraival = ({ products, isFetching, error, addToWishList }) => {
  const lang = localStorage.getItem('lang');
  return (
    <section className='section-new-arrivals' id='new-arrivals'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-md-4 col-sm-5'>
            <div className='offers-box'>
              <div className='sec-head clearfix'>
                <h2 className='sec-title f-left'>{lang=='ar'?'العروض':'OFFERS'}</h2>
                <Link to='/products' className='more-page f-right'>{lang=='ar'?'المزيد':'more'} <i className='icon-arrow-right icons' /></Link>
              </div>
              <div className='sec-warpper'>
                <OffersSlider products={products} />
              </div>
            </div>
          </div>
          <div className='col-lg-9 col-md-8 col-sm-7'>
            <div className='sec-head clearfix'>
              <h2 className='sec-title f-left'>{lang=='ar'?'حديثاً المضاف ':'new arrivals'}</h2>
              <Link to='/products' className='more-page f-right'>{lang=='ar'?'المزيد':'more'} <i className='icon-arrow-right icons' /></Link>
            </div>
            <div className='sec-warpper'>
              {
                isFetching
                  ? <h4>Loading ...</h4>
                  :<NewArrivalSlider
                    products={products}
                    addToWishList={addToWishList}
                  />
              }

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = ({products}) => {
  const {products: Products, isFetching, error} = products

  return {
    products: Products,
    isFetching: isFetching,
    error: error
  }
}

export default connect(mapStateToProps)(NewArraival)
