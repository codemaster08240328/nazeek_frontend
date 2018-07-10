import React from 'react'
import { Link } from 'react-router-dom'
import CuostmerCare from './cuostmerCare'
import ProducerDesigner from './producerDesigner'
import Career from './career'
import scrollToComponent from 'react-scroll-to-component';

class Contact extends React.Component {
  constructor(props){
    super(props);
    this.customer = React.createRef();
    this.producer = React.createRef();
    this.career = React.createRef();
  }
  componentDidMount() {
    switch(localStorage.getItem('contact')){
      case 'customer':
        scrollToComponent(this.customer.current, { offset: -30, align: 'top', duration: 500, ease:'inCirc'});
        break;
      case 'producer':
        scrollToComponent(this.producer.current, { offset: -30, align: 'top', duration: 500, ease:'inCirc'});
        break;
      case 'career':
        scrollToComponent(this.career.current, { offset: -30, align: 'top', duration: 500, ease:'inCirc'});
        break;
      default:
        break;
    }
  }
  componentDidUpdate() {
    switch(localStorage.getItem('contact')){
      case 'customer':
        scrollToComponent(this.customer.current, { offset: -30, align: 'top', duration: 500, ease:'inCirc'});
        break;
      case 'producer':
        scrollToComponent(this.producer.current, { offset: -30, align: 'top', duration: 500, ease:'inCirc'});
        break;
      case 'career':
        scrollToComponent(this.career.current, { offset: -30, align: 'top', duration: 500, ease:'inCirc'});
        break;
      default:
        break;
    }
  }
  render(){
    
    return (
      <React.Fragment>
        <div className='breadcrumb-bar'>
          <div className='container'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'><Link to='/'><i className='icon-home icons' /></Link></li>
              <li className='breadcrumb-item active'>Contact us</li>
            </ol>
          </div>
        </div>
        <div className='content-innerPage'>
          <div className='container'>
            <div className='sec-head clearfix'>
              <h2 className='sec-title f-left'>CONTACT US</h2>
            </div>
            <CuostmerCare ref={this.customer}/>
            <ProducerDesigner ref={this.producer}/>
            <Career ref={this.career}/>
          </div>
        </div>

      </React.Fragment>
    )
  }
}

export default Contact
