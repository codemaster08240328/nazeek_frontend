import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import RequireAuth from './RequierAuth'
import Header from './common/header/header'
import Footer from './containers/Footer'
import Home from './containers/Home'
import Register from './register'
import Login from './containers/Login'
import ContactUs from './contact_us'
import Profile from './containers/userProfile'
import Product from './containers/Product'
import Products from './containers/Products'
import Categorise from './containers/Categorise'
import ResetPass from './containers/ResetPass'
import RegisterationDone from './auth/signUpDone'
import resetStart from './auth/resetStart'
import ActivateAccont from './containers/ActivateAccont'
import ResetPassConfirm from './containers/ResetPassConfirm'
import Cart from './containers/Cart'
import CheckOut from './checkout'
import DummyPage from './containers/DummyPages'

import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'redux-notifications/lib/styles.css'

class App extends Component {

  componentDidMount(){
    if(localStorage.getItem('lang') === 'ar'){
      require ('./../styles/index_ar.css')
    }else{
      require ('./../styles/index.css')
    }
  }

  render () {
    return (
      <div className='main-wrapper'>
        {/* <div id='preloader'>
          <div className='loading' />
        </div> */}
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/contact-us' component={ContactUs} />
          <Route path='/profile' component={RequireAuth(Profile)} />
          <Route path='/cart' component={RequireAuth(Cart)} />
          <Route path='/checkout' component={RequireAuth(CheckOut)} />
          <Route exact path='/products' component={Products} />
          <Route path='/products/:id' component={Product} />
          <Route path='/categories/:id' component={Categorise} />
          <Route path='/registeration-done' component={RegisterationDone} />
          <Route path='/reset-password-confirm' component={resetStart} />
          <Route path='/account/confirm-email/:key' component={ActivateAccont} />
          <Route path='/account/confirm-reset/:key' component={ResetPassConfirm} />
          <Route path='/static/:name' component={DummyPage} />
          <Route path='/reset' component={ResetPass} />
          <Redirect to='/' />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App
