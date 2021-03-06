import React from 'react'

const ProductDetailsTab = ({overview, detail, review}) => {
  const lang = localStorage.getItem('lang');
  return (
    <React.Fragment>
      <ul className='nav-tab-product clearfix'>
        <li className='active'>
          <a href='#pro-t1' data-toggle='tab' aria-expanded='true'>{lang==='ar'?'نظرة عامة':'overview'}</a>
        </li>
        <li>
          <a href='#pro-t2' data-toggle='tab' aria-expanded='false'>{lang==='ar'?'تفاصيل':'Details'}</a>
        </li>
        <li>
          <a href='#pro-t3' data-toggle='tab' aria-expanded='false'>{lang==='ar'?'التعليقات':'Reviews'}</a>
        </li>
      </ul>
      <div className='tab-content'>
        <div className='tab-pane active' id='pro-t1'>
          <div className='tab-content-txt'>
            <p>{overview}</p>
          </div>
        </div>
        <div className='tab-pane fade' id='pro-t2'>
          <div className='tab-content-txt'>
            <p>{detail}</p>
          </div>
        </div>
        <div className='tab-pane fade' id='pro-t3'>
          <div className='tab-content-txt'>
            <p>{review}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ProductDetailsTab
