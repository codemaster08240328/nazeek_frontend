import React from 'react'
import { connect } from 'react-redux'
import { getAdresses } from '../../actions/addressActions'
import { getCheckout } from '../../actions/checkoutActons'
import knet from '../../assets/images/py1.png'
import credit from '../../assets/images/py2.png'
import tappay from '../../assets/images/py3.png'

class CheckOut extends React.Component {

  constructor(props){
    super(props);
    this.state={

    }
    this.handlePay = this.handlePay.bind(this)
  }
  
  handlePay(){
    this.props.getCheckout()
  }
  componentDidMount(){
    this.props.getAdresses();
  }
  render(){
    const { addresses, isFetching, cartProducts } = this.props;
    const lang = localStorage.getItem('lang');
    return (
      <React.Fragment>
        <div className='breadcrumb-bar'>
          <div className='container'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'><a href=''><i className='icon-home icons' /></a></li>
              <li className='breadcrumb-item active'>{lang==='ar'?'الدفع':'checkout'}</li>
            </ol>
          </div>
        </div>
        <div className='content-innerPage'>
          <div className='container'>
            <div className='sec-head clearfix'>
              <h2 className='sec-title f-left'>{lang==='ar'?'الدفع':'checkout'}</h2>
            </div>
            <div className='checkout-block'>
              <div className='table-responsive'>
                <table className='table table-st2'>
                  <thead>
                    <tr>
                      <th>{lang==='ar'?'قائمة العناوين':'Address List'}</th>
                      <th />
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {
                      isFetching
                        ? <h4>Loading ...</h4>
                        : addresses.map((item, index) => {
                          return (
                            <tr key={index}>
                              <td>
                                <div className='address-title'>
                                  <div className='add-icons'><i className='icon-location-pin icons' /></div>
                                  <div className='add-tTxt'>
                                    <p>{item.street}, {item.city}, {item.zipcode}</p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <a href='#' className='address-edit'><i className='icon-note icons' /></a>
                              </td>
                              <td>
                                <a href='#' className='address-remove'><i className='icon-close icons' /></a>
                              </td>
                            </tr>
                          )
                        })
                    }
                  </tbody>
                </table>
              </div>
              <a href='#myModal-address' data-toggle='modal' className='add-newAddress'><i className='icon-plus icons' />{lang==='ar'?'إضافة عنوان جديد':'Add New Address'}</a>
            </div>
            <div className='checkout-block'>
              <div className='table-responsive'>
                <table className='table table-st2'>
                  <thead>
                    <tr>
                      <th>{lang==='ar'?'ملخص الطلب':'Order Summery'}</th>
                      <th>{lang==='ar'?'السعر كامل':'Total Price'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      cartProducts.items &&
                      cartProducts.items.map((item, index)=>{
                        return(
                          <tr key={index}>
                            <td>
                              <div className='add-tTxt'>
                                <h2>{item.item_title}</h2>
                                <p>{lang==='ar'?'النوصيل خلال ثلاثة أيام':'Delivery in 3 days thought delivery'}</p>
                              </div>
                            </td>
                            <td className='td-price'>{item.line_item_total} {lang==='ar'?'د.ك':'KD'}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
              <div className='block--discount'>
                <div className='without-div'><i className='icon-doc icons' /><p>{lang==='ar'?'مجموع (بدون رسوم التوصيل(':'TOTAL (without delivry fees)'}  : {cartProducts.subtotal} {lang==='ar'?'د.ك':'KD'}</p></div>
                <label className='label-disc'>{lang==='ar'?'خصم 30%':'30 %  Discount'}</label>
              </div>
              <div className='checkout-bottom clearfix'>

                <div className='ch-b-left'>
                  <a href='#' className='ge-request'>{lang==='ar'?'طلب عام':'General Requset'}</a>
                  <ul className='ch-des'>
                    <li>{lang==='ar'?'معدات':'Items'} : {cartProducts.subtotal} K.D</li>
                    <li>{lang==='ar'?'بدون رسوم التوصيل':'Deliver Fees'} : {cartProducts.tax_total} K.D</li>
                    <li>{lang==='ar'?'المبلغ الإجمالي':'Total Amount'} : {cartProducts.total} K.D</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='checkout-block'>
              <h2 className='title-head2'>{lang==='ar'?'طريقة الدفع':'Payment Way'}</h2>
              <div className='payment--method clearfix'>
                <div className='pay-mrg'>
                  <input type='radio' name='pay-method' />
                  <img src={knet} alt='' />
                  <h3>k-net</h3>
                </div>
                <div className='pay-mrg'>
                  <input type='radio' name='pay-method' />
                  <img src={credit} alt='' />
                  <h3>Credit</h3>
                </div>
                <div className='pay-mrg'>
                  <input type='radio' name='pay-method' />
                  <img src={tappay} alt='' />
                  <h3>Tap pay</h3>
                </div>
              </div>
              <div className='checkout-bottom clearfix'>
                <div className='ch-b-left'>
                  <a onClick={this.handlePay} className='ge-request'>{lang==='ar'?'إدفع الآن':'Pay now'}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({address, cart}) => {
  const { addresses, isFetching } = address;
  const { cartProducts } = cart
  return {
    addresses,
    isFetching,
    cartProducts
  }
}

const mapDispatchToProps = {
  getAdresses,
  getCheckout
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut)
