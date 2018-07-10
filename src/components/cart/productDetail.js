import React, { Component } from 'react'

export default class productDetail extends Component {
    constructor(props){
        super(props);
        this.state={
            quantity: this.props.item.quantity
        }
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
    render() {
        const { item, cart, key } = this.props;
        return (
            <tr key={key}>
                <td>
                    <div className='t-prItem clearfix'>
                        <a href='#' className='tp-thumb'>
                        <img src={`data:image/jpg;base64, ${item.product_img}`} alt='' className='img-responsive' />
                        </a>
                        <div className='tp-desc'>
                        <h2><a href='#'>{item.item_title}</a></h2>
                        <p>{item.description}</p>
                        </div>
                    </div>
                </td>
                <td>#{item.product}</td>
                <td>
                    <div className='quantity'>
                        <input type='text' name='count-quat1' className='count-quat' value={this.state.quantity} onChange={()=>{}}/>
                        <div className='btn button-count inc jsQuantityIncrease' onClick={this.handleQuantityIncrease}><i className='fa fa-plus' aria-hidden='true' /></div>
                        <div className='btn button-count dec jsQuantityDecrease' onClick={this.handleQuantityDecrease}><i className='fa fa-minus' aria-hidden='true' /></div>
                    </div>
                    <button className='btn btn-refresh' onClick={()=>{this.props.getItemsOfCart(item.id, this.state.quantity)}}><i className='icon-refresh icons' /></button>
                </td>
                <td>{item.price}</td>
                <td>{item.line_item_total}</td>
                <td>
                    <a href='#' className='address-heart' onClick={()=>{this.props.addToWishList(item)}}><i className='icon-heart icons' /></a>
                </td>
                <td>
                    <a href='#' className='address-edit'><i className='icon-note icons' /></a>
                </td>
                <td>
                    <a href='#' className='address-remove' onClick={()=>{this.props.deleteCartItem(this.props.cartId, item.id)}}><i className='icon-close icons' /></a>
                </td>
            </tr>
        )
    }
}
