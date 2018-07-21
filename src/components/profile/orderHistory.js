import React from 'react'
import { connect } from 'react-redux'
import {getOrderList} from '../../actions/checkoutActons' 

class OrderHistory extends React.Component {
  componentDidMount(){
    this.props.getOrderList()
  }
  render(){
    const lang = localStorage.getItem('lang')
    return (
      <div className='col-lg-9 col-md-8 col-sm-12'>
        <div className='sec-head marg-b0 clearfix'>
          <h2 className='sec-title f-left'>{lang=='ar'?'تاريخ الطلب':'Order History'}</h2>
        </div>
        <div className='sec-warpper'>
          <div className='order-history-list'>
            <div className='order-hRow'>
              <div className='ooh-head'>
                <ul className='order-hHead clearfix'>
                  <li>{lang=='ar'?'تاريخ الطلب':'order date'}: <span>9/11/2017</span></li>
                  <li>{lang=='ar'?'الطلب':'order'}#:<span>2017</span></li>
                  <li>{lang=='ar'?'سعر الطلب (د.ك)':'Order price(KD)'}:<span>9017</span></li>
                  <li>{lang=='ar'?'الحالة':'status'}:<span>{lang=='ar'?'التسليم في 1/1/2017':'Delivered on  1/1/2017'}</span></li>
                </ul>
              </div>
              <div className='ooh-body'>
                <div className='table-responsive'>
                  <table className='table table-st1'>
                    <thead>
                      <tr>
                        <th className='th-product'>{lang=='ar'?'المنتج':'Product'}</th>
                        <th>{lang=='ar'?'رقم المنتج':'Item ID'}</th>
                        <th>{lang=='ar'?'سعر المنتج (د.ك)':'Item price'}</th>
                        <th>{lang=='ar'?'الكمية':'Quantity'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className='t-prItem clearfix'>
                            <a href='#' className='tp-thumb'>
                              <img src='images/ku.png' alt='' className='img-responsive' />
                            </a>
                            <div className='tp-desc'>
                              <h2><a href='#'>{lang=='ar'?'عنوان العينة':'Sample Title'}</a></h2>
                              <p>{lang=='ar'?'عينة توضيحية':'Sample Description'}</p>
                            </div>
                          </div>
                        </td>
                        <td>#32948</td>
                        <td>948</td>
                        <td>3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className='delivery-note'><span>{lang=='ar'?'عنوان التسليم':'Delivery address'}:{lang=='ar'?'عنوان العينة':'Sample Address'}</span></div>
              </div>
            </div>
            <div className='order-hRow'>
              <div className='ooh-head'>
                <ul className='order-hHead clearfix'>
                  <li>{lang=='ar'?'تاريخ الطلب':'order date'}: <span>9/11/2017</span></li>
                  <li>{lang=='ar'?'الطلب':'order'}#:<span>2017</span></li>
                  <li>{lang=='ar'?'سعر الطلب (د.ك)':'Order price(KD)'}:<span>9017</span></li>
                  <li>{lang=='ar'?'الحالة':'status'}:<span>{lang=='ar'?'التسليم في 1/1/2017':'Delivered on  1/1/2017'}</span></li>
                </ul>
              </div>
              <div className='ooh-body'>
                <div className='table-responsive'>
                  <table className='table table-st1'>
                    <thead>
                      <tr>
                        <th className='th-product'>{lang=='ar'?'المنتج':'Product'}</th>
                        <th>{lang=='ar'?'رقم المنتج':'Item ID'}</th>
                        <th>{lang=='ar'?'سعر المنتج (د.ك)':'Item price'}</th>
                        <th>{lang=='ar'?'الكمية':'Quantity'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className='t-prItem clearfix'>
                            <a href='#' className='tp-thumb'>
                              <img src='images/ku.png' alt='' className='img-responsive' />
                            </a>
                            <div className='tp-desc'>
                              <h2><a href='#'>{lang=='ar'?'عنوان العينة':'Sample Title'}</a></h2>
                              <p>{lang=='ar'?'عينة توضيحية':'Sample Description'}</p>
                            </div>
                          </div>
                        </td>
                        <td>#32948</td>
                        <td>948</td>
                        <td>3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className='delivery-note'><span>{lang=='ar'?'عنوان التسليم':'Delivery address'}:{lang=='ar'?'عنوان العينة':'Sample Address'}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({checkout}) => {
  const { orderlist } = checkout;
  return {
    orderlist
  }
}

const mapDispatchToProps = {
  getOrderList
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistory)
