import React from 'react'
import imgSlide from '../../../assets/images/img-slide.jpg'

const HomeSliderItem = () => {
  const lang = localStorage.getItem('lang');
  return (
    <div className='item'>
      <div className='item-slide' style={{backgroundImage: `url(${imgSlide})`}} >
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-sm-8 margin-auto'>
              <div className='slide-txt fadeInUp wow' data-wow-duration='1s' data-wow-delay='0.2s'>
                <h2>{lang=='ar'?'لوريم إيبسوم هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do'}</h2>
                <p>{lang=='ar'?'لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر.':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} </p>
                <a href='#' className='btn-link'>{lang=='ar'?'إبدأ هنا':'Start Here'} <i className='icon-action-redo icons' /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeSliderItem
