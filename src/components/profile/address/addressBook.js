import React, { Component } from 'react'
import AddressModal from './modal'

class AddressBook extends Component {
  constructor (props, context) {
    super(props, context)

    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)

    this.state = {
      show: false
    }
  }

  componentDidMount () {
    this.props.getAdresses()
  }

  handleClose () {
    this.setState({ show: false })
  }

  handleShow () {
    this.setState({ show: true })
  }

  render () {
    const {addresses, isFetching, error} = this.props
    const lang = localStorage.getItem('lang')
    return (
      <React.Fragment>
        <div className='col-lg-9 col-md-8 col-sm-12'>
          <div className='sec-head marg-b0 clearfix'>
            <h2 className='sec-title f-left'>{lang == 'ar'?'العنوان الشخصي':'Address book'}</h2>
          </div>
          <div className='sec-warpper'>
            <div className='table-address'>
              <div className='table-responsive'>
                <table className='table table-view-address'>
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
              <a onClick={this.handleShow} className='add-newAddress'><i className='icon-plus icons' />{lang==='ar'?'إضافة عنوان جديد':'Add New Address'}</a>
            </div>
          </div>
        </div>
        <AddressModal show={this.state.show} handleClose={this.handleClose} />
      </React.Fragment>

    )
  }
}

export default AddressBook
