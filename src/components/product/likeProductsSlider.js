import React from 'react'
import OwlCarousel from 'react-owl-carousel'

const LikeProduct = ({similarProducts}) => {
  return (
    <OwlCarousel
      className='owl-carousel style-owl'
      id='like-product-slider'
      margin={0}
      nav={true}
    >
    {
      similarProducts && 
      similarProducts.map((item, index)=>{
        return(<div className='item' key={index}>
          <div className='like-product-item clearfix'>
            <a href='#' className='lp-thumb'>
              <img src={`data:image/jpg;base64, ${item.img}`} alt='' />
            </a>
            <div className='lp-txt'>
              <p className='desc-p'>
                {item.description}
              </p>
              <div className='star-rating'>
                <span style={{ width: '60%' }}><strong className='rating'>3</strong> out of 5</span>
              </div>
              <span className='pr-sa'>{item.price} DK</span>
            </div>
          </div>
        </div>)
      })
    }
      

    </OwlCarousel>)
}

export default LikeProduct
