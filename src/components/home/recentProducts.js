import React from 'react'
import RecentProductsSlider from './recentProductsSlider/recentProductsSlider'

const RecentProducts = ({ products, isFetching, error }) => {
  const lang = localStorage.getItem('lang');
  return (
    <section className='section-recent'>
      <div className='container'>
        <div className='sec-head clearfix'>
          <h2 className='sec-title'>{lang=='ar'?'المشاهد مؤخراً':'RECENT VIEW'}</h2>
        </div>
        <div className='sec-warpper padd-l-r'>
          <RecentProductsSlider
            products={products}
          />
        </div>
      </div>
    </section>
  )
}

export default RecentProducts
