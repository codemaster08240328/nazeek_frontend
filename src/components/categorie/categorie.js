import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Products from '../porducts'

class Categorie extends Component {
  componentDidMount () {
    // const { id } = this.props.match.params
    // this.props.fetchCategotie(id)
  }

  render () {
    const { products, isFetching, error } = this.props
    return (
      <React.Fragment>
        <div className='breadcrumb-bar'>
          <div className='container'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'><Link to='/'><i className='icon-home icons' /></Link></li>
              <li className='breadcrumb-item active'>All CATEGORIES</li>
            </ol>
          </div>
        </div>
        <div className='content-innerPage'>
          {
            isFetching
              ? <div id='preloader'>
                <div className='loading' />
              </div>
              : <Products
                products={products}
                productsCount={products.length}
                location={this.props.location} />
          }
        </div>
      </React.Fragment>
    )
  }
}

export default Categorie
