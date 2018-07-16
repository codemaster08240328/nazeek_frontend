import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import OffersSliderItem from './offersSliderItem'

const OffersSlider = ({ products }) => {
  const lang = localStorage.getItem('lang')
  if(lang == 'ar')
   return (
    <OwlCarousel
      id='offers-slider'
      className='owl-carousel'
      nav
      navText={['التالي <i class="fa fa-angle-right"/>', '<i class="fa fa-angle-left"/> السابق']}
      items={1}
    >
      {
        products.map((product) => {
          return <OffersSliderItem key={product.id} product={product} />
        })
      }
    </OwlCarousel>
   )
  else
  return (
    <OwlCarousel
      id='offers-slider'
      className='owl-carousel'
      nav
      navText={['Next <i class="fa fa-angle-right"/>', '<i class="fa fa-angle-left"/> Previous']}
      items={1}
    >
      {
        products.map((product) => {
          return <OffersSliderItem key={product.id} product={product} />
        })
      }
    </OwlCarousel>

  )
}

export default OffersSlider
