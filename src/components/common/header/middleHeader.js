import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/images/logo-site.png'

class middleHeader extends Component{

  componentDidMount() {
    this.props.getItemsOfCart();
    if(localStorage.getItem('token') !== null)
      this.props.fetchWishlistItemCount();
  };
  

  handleSubmit= (e)=> {
    e.preventDefault();
    const filter = e.target.search.value;
    this.props.fetchProducts(filter);
    this.props.history.push('/products');  
  }

  render () {
    const lang = localStorage.getItem('lang')
    return (
      <div className='header-middle'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3 col-sm-3'>
              <Link to='/' className='logo-site'>
                <img src={Logo} alt='' className='img-responsive' />
              </Link>
            </div>
            <div className='col-md-6 col-sm-6'>
              <form className='form-search-head' onSubmit={this.handleSubmit}>
                <input name='search' type='text' className='form-control' placeholder={lang==='ar'?'البحث':'search'} />
                <button className='btn btn-submit-search'><i className='icon-magnifier icons' aria-hidden='true' /></button>
              </form>
            </div>
            <div className='col-md-3 col-sm-3'>
              <div className='clearfix'>
                <ul className='menu-purches clearfix'>
                  <li className='favorite-btn'>
                    <Link to='/profile' onClick={()=>{localStorage.setItem('wishlist','wishlist')}}><i className='icon-heart icons' /><span>{localStorage.getItem('token')!==null?this.props.count:0}</span></Link>
                  </li>
                  <li className='cart-purches-btn'>
                    <Link to='/cart'><i className='icon-basket icons' /><span>{this.props.totalCount}</span></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default middleHeader

