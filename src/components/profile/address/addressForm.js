import React from 'react'

class AddressForm extends React.Component {
  constructor(props){
    super(props);
    this.state={
      city: '',
      type: '',
      street: '',
      jadda: '',
      house: '',
      zipcode: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createAddress(this.state)
  }

  render(){
    return (
      <form className='form-st1' onSubmit={this.handleSubmit}>
        <div className='form-group row'>
          <label className='col-sm-4 control-label'>City</label>
          <div className='col-sm-8'>
            <input type='text' name='city' placeholder='Enter yours here' value={this.state.city} className='form-control' onChange={this.handleChange} required/>
          </div>
        </div>
        <div className='form-group row'>
          <label className='col-sm-4 control-label'>Area</label>
          <div className='col-sm-8'>
            <select name='type' onChange={this.handleChange} className='form-control chosen-select'>
              <option value=''>Select here</option>
              <option value='shipping'>Shipping</option>
              <option value='billing'>Billing</option>
            </select>
          </div>
        </div>
        <div className='form-group row'>
          <label className='col-sm-4 control-label'>Street</label>
          <div className='col-sm-8'>
            <input type='text' name='street' placeholder='Enter yours here' className='form-control' value={this.state.street} onChange={this.handleChange} className='form-control' required/>
          </div>
        </div>
        <div className='form-group row'>
          <label className='col-sm-4 control-label'>Jadda/Avenue</label>
          <div className='col-sm-8'>
            <input type='text' name='jadda' placeholder='Enter yours here' className='form-control' value={this.state.jadda} onChange={this.handleChange} className='form-control' required/>
          </div>
        </div>
        <div className='form-group row'>
          <label className='col-sm-4 control-label'>House</label>
          <div className='col-sm-8'>
            <input type='text' name='house' placeholder='Enter yours here' className='form-control' value={this.state.house} onChange={this.handleChange} className='form-control' required/>
          </div>
        </div>
        <div className='form-group row'>
          <label className='col-sm-4 control-label'>ZIP code</label>
          <div className='col-sm-8'>
            <input type='text' name='zipcode' placeholder='Enter yours here' className='form-control' value={this.state.zipcode} onChange={this.handleChange} className='form-control' required/>
          </div>
        </div>
        <div className='form-check row marg-t20 marg-b20'>
          <div className='col-sm-offset-4 col-sm-8'>
            <div className='ui_checkbox'>
              <input type='checkbox' name='example'/>
              <label>This adress is defult</label>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-offset-4 col-sm-8'>
            <button type='submit' className='btn btn-submit inline marg-t20'>Add</button>
          </div>
        </div>
      </form>
    )
  }
}

export default AddressForm
