import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LikeProduct from './likeProductsSlider'
import ProductDetailsTab from './productDetailsTab'
import Sliders from './sliders'
import VideoModal from './youtubeModal'
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  GooglePlusShareButton,
  GooglePlusIcon
} from 'react-share'
import Alert from '../alert/alert'
import './share.css'
class Product extends Component {
  constructor(props){
    super(props);
    this.state = {
      quantity: 1,
      isYoutubeModal: false,
      variationSetId: 0
    }
    this.toggleYoutubeModal = this.toggleYoutubeModal.bind(this);
    this.selectVariationId = this.selectVariationId.bind(this)
  }

  toggleYoutubeModal(){
    this.setState({
      isYoutubeModal: !this.state.isYoutubeModal
    })
  }

  selectVariationId(id){
    this.setState({
      variationSetId: id
    })
  }

  handleQuantityIncrease = () => {
    this.setState({
      quantity: this.state.quantity + 1
    })
  }

  handleQuantityDecrease = () => {
    if (this.state.quantity > 1) {
      this.setState({
        quantity: this.state.quantity - 1
      })
    }
  }

  componentDidMount () {
    const { id } = this.props.match.params
    this.props.fetchProduct(id);
  }

  componentDidUpdate(){

  }

  getItemsOfCart (varId, count = 1) {
    this.props.getItemsOfCart(varId, count)
  }

  render () {
    const { isFetching, product, error } = this.props

    const shareUrl = 'google.com'
    const title = "title"
    const body = 'body'
    const lang = localStorage.getItem('lang')

    return (
      <React.Fragment>
        <div className='breadcrumb-bar'>
          <div className='container'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'><Link to='/'><i className='icon-home icons' /></Link></li>
              <li className='breadcrumb-item'><a href='product-page.html'>{product.category_name}</a></li>
              <li className='breadcrumb-item active'>{product.title}</li>
            </ol>
          </div>
        </div>
        {error}
        {
          isFetching
            ? <div id='preloader'>
              <div className='loading' />
              </div>
            : <div className='content-innerPage'>
                <div className='container'>
                  <div className='product-detail-primary'>
                    <div className='row'>
                      <div className='col-md-7'>
                        <div className='block-product-slide'>
                          <Sliders imgs={product.productimage_set} />
                          <div className='bottom-slide-pro clearfix'>
                            <ul className='share-pro clearfix'>
                              <li className='sh-share'><i className='icon-share icons' /></li>
                              <li className='sh-instgram'>
                                <GooglePlusShareButton
                                  url={shareUrl}
                                  className="Demo__some-network__share-button">
                                  <GooglePlusIcon
                                    size={40}
                                    round />
                                </GooglePlusShareButton>
                                {/* <a href='javascript:void(0);' target='_blank'><i className='fa fa-instagram' aria-hidden='true' /></a> */}
                              </li>
                              <li className='sh-face'>
                                <FacebookShareButton
                                  url={shareUrl}
                                  quote={title}
                                  className="Demo__some-network__share-button">
                                  <FacebookIcon
                                    size={40}
                                    round />
                                </FacebookShareButton>
                              </li>
                            </ul>
                            <ul className='links-meta-left clearfix'>
                              <li>
                                <a href="javascript:void(0);" onClick={() => window.print()}><i className='icon-printer icons' /></a>
                                
                              </li>
                              <li>
                                <EmailShareButton
                                  url='shareUrl'
                                  title = 'title'
                                  className="Demo__some-network__share-button"
                                  body = 'body'>
                                  <EmailIcon
                                    size={40}
                                    round
                                    color='red' />
                                </EmailShareButton>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-5'>
                        <div className='pdp-right'>
                          <h3>{product.seller_name}<a href="#"  onClick={this.toggleYoutubeModal}><i className='fa fa-youtube-play' aria-hidden='true' /></a></h3>
                          <div className='sec-head marg-b0 clearfix'>
                            <h2 className='sec-title'>{product.title}</h2>
                          </div>
                          <div className='pdp--list'>
                            <div className='pdp-ro'>
                              <p className='f-rguler'>PRICE  : <span className='pr-sa'>{product.price} K.D</span></p>
                            </div>
                            <div className='pdp-ro'>
                              <p className='f-rguler'>COLOR : </p>
                              <div className='color-choose'>
                                {
                                  product.variation_set.map((item, index) => {
                                    return (
                                      <div key={index}>
                                        <input data-image='color4' type='radio' id={item.id} name='color' onClick={()=>{this.selectVariationId(index)}} defaultChecked={index===0?true:false} />
                                        <label htmlFor={item.id}>
                                          <span style={{backgroundColor: item.color ? item.color : '#eee'}} />
                                        </label>
                                      </div>
                                    )
                                  })
                                }
                              </div>
                            </div>
                            <div className='pdp-ro'>
                              <p className='f-rguler'>QUANTITY:</p>
                              <div className='quantity'>
                                <input type='text' name='count-quat1' className='count-quat' value={this.state.quantity} onChange={()=>{}}/>
                                <div className='btn button-count inc jsQuantityIncrease' onClick={this.handleQuantityIncrease}><i className='fa fa-plus' aria-hidden='true' /></div>
                                <div className='btn button-count dec jsQuantityDecrease' minimum='1' onClick={this.handleQuantityDecrease}><i className='fa fa-minus' aria-hidden='true' /></div>
                              </div>
                            </div>
                            <div className='pdp-ro'>
                              <p>Item id : #{product.id}</p>
                            </div>
                            <div className='pdp-ro'>
                              <p><i className='icon-check icons' />Stock Availbale</p>
                            </div>
                            <div className='pdp-ro'>
                              <p>Delivery Time: 34 Hours </p>
                            </div>
                            <div className='pdp-ro'>
                              <p className='f-rguler'>Dimensions: 234 23*3434</p>
                            </div>
                          </div>
                          <div className='pdp--action clearfix'>
                            <a href='javascript:void(0);' onClick={() => this.getItemsOfCart(product.variation_set[this.state.variationSetId].id, this.state.quantity)} className='addCart'>{lang=='ar'?'أضف الى السلة':'Add To Cart'}</a>
                            <a href='javascript:void(0);' onClick={() => this.props.addToWishList(product.variation_set[this.state.variationSetId])} className='favorite-pro-btn'><i className='icon-heart icons' /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='product-details-tab'>
                    <ProductDetailsTab overview={product.description} detail={product.detail} review={product.review} />
                  </div>
                  <div className='box-like-product'>
                    <div className='sec-head clearfix'>
                      <h2 className='sec-title'>Similer Items</h2>
                    </div>
                    <div className='like-product-content'>
                      <LikeProduct similarProducts={product.similar_product_set}/>
                    </div>
                  </div>
                </div>
                <VideoModal isModal={this.state.isYoutubeModal} toggleModal={this.toggleYoutubeModal}/>
                <Alert message='Success' visible={this.props.wishlistSuccess || this.props.cartSuccess}/>
              </div>
        }
      </React.Fragment>
    )
  }
}

export default Product
