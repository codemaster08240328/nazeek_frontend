import React from 'react'
import { connect } from 'react-redux'
import emailImg from '../../assets/images/email.png'
import { sendSubscribe } from '../../actions/subscribeAction'
import Alert from '../alert/alert'

class Subscribe extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: ''
    }
    this.handleSend = this.handleSend.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e){
    const { name, value} = e.target;
    this.setState({
      [name]: value
    })
  }
  handleSend(e) {
    e.preventDefault();
    this.props.sendSubscribe(this.state.email);
  }
  render(){
    const lang = localStorage.getItem('lang')
    return (
      <section className='section-subscribe'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-5 col-sm-6'>
              <div className='scribe-txt'>
                <img src={emailImg} alt='' />
                <p>{lang=='ar'?'اشترك للحصول على قائمة':'Subscribe For Mailing List'}</p>
              </div>
            </div>
            <div className=' col-md-5 col-sm-6'>
              <form className='scribe-form' onSubmit={this.handleSend}>
                <input  name='email' type='email' value={this.state.email} onChange={this.handleChange} className='form-control' placeholder={lang=='ar'?'أدخل ايميلك':'Enter Your Mail'} required/>
                <button type='submit' className='btn btn-scribe'><i className='icon-paper-plane icons' /></button>
              </form>
            </div>
          </div>
        </div>
        <Alert message={lang=='ar'?'شكرًا لإشتراكك معنا':'Thank you for your subscription'} visible={this.props.success}/>
      </section>
    )
  }
}

const mapStateToProps = ({subscribe}) => {
  const { isFetching, error, success } = subscribe

  return {
    isFetching,
    error,
    success
  }
}

const mapDispatchToProps = {
  sendSubscribe 
}

export default connect(mapStateToProps, mapDispatchToProps)(Subscribe)
