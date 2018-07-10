import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class BottomHeader extends Component {

  componentDidMount () {
    this.props.fetchCategoties();
    this.props.getSearchByLists();
  }

  render () {
    const { categories, isFetching, searchByLists, isSearchBy } = this.props
    return (
      <div className='header-bottom'>
        <div className='container'>

          <div className='hb-right clearfix'>
            <a href='javascript:void(0);' className='btn-design'>design your room</a>
            <a href='#menu' className='hamburger is-closed'>
              <span className='hamb-top' />
              <span className='hamb-middle' />
              <span className='hamb-bottom' />
            </a>
          </div>

          <div className='hb-left clearfix'>
            <ul className='menu-st search-by clearfix'>
              <li className='dropdown'>
                <a href='product-page.html' data-toggle='dropdown'><i className='icon-magnifier icons' aria-hidden='true' /> search by<span className='m-arrow'><i className='icon-arrow-down icons' /></span></a>
                <ul className='dropdown-menu multi-level' role='menu' aria-labelledby='dropdownMenu'>
                  <li className='dropdown-submenu'>
                    <a tabIndex='-1' href='product-page.html'>rooms</a>
                    <div className='dropdown-menu'>
                      <h3>ROOMS</h3>
                      <ul>
                        {
                          searchByLists.rooms && 
                          searchByLists.rooms.map((item, index)=>{
                            return(<li key={index}><Link to='/products' onClick={() => this.props.getSearchByProducts('rooms', item.id)}>{item.title}</Link></li>)
                          })
                        }
                      </ul>
                    </div>
                  </li>
                  <li className='dropdown-submenu'>
                    <a tabIndex='-1' href='product-page.html'>BRANDS</a>
                    <div className='dropdown-menu'>
                      <h3>BRANDS</h3>
                      <ul>
                        {
                          searchByLists.brands && 
                          searchByLists.brands.map((item, index)=>{
                            return(<li key={index}><Link to='/products' onClick={() => this.props.getSearchByProducts('rooms', item.id)}>{item.title}</Link></li>)
                          })
                        }
                      </ul>
                    </div>
                  </li>
                  <li className='dropdown-submenu'>
                    <a tabIndex='-1' href='product-page.html'>STYLES</a>
                    <div className='dropdown-menu'>
                      <h3>STYLES</h3>
                      <ul>
                        {
                          searchByLists.styles && 
                          searchByLists.styles.map((item, index)=>{
                            return(<li key={index}><Link to='/products' onClick={() => this.props.getSearchByProducts('rooms', item.id)}>{item.title}</Link></li>)
                          })
                        }
                      </ul>
                    </div>
                  </li>
                  <li className='dropdown-submenu'>
                    <a tabIndex='-1' href='product-page.html'>OCCASIONS</a>
                    <div className='dropdown-menu'>
                      <h3>OCCASIONS</h3>
                      <ul>
                        {
                          searchByLists.occasions && 
                          searchByLists.occasions.map((item, index)=>{
                            return(<li key={index}><Link to='/products' onClick={() => this.props.getSearchByProducts('rooms', item.id)}>{item.title}</Link></li>)
                          })
                        }
                      </ul>
                    </div>
                  </li>
                  
                </ul>
              </li>
            </ul>
            <ul className='menu-st main-menu clearfix'>
              {
                isFetching
                  ? <li />
                  : categories.map((categorie, index) => {
                    return (
                      <li className='dropdown' key={index}>
                        <Link to={`/categories/${categorie.id}`}  onClick={() => this.props.fetchCategotie(categorie.id)}>{categorie.title}</Link>
                      </li>
                    )
                  })
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default BottomHeader
