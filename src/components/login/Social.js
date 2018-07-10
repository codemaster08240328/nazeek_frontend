import React from 'react';
import SocialLogin from 'react-social-login';
 
const Button = ({ type, IconClass, ContainerClass, triggerLogin, ...props }) => (
  <li className={ContainerClass} onClick={triggerLogin} {...props}>
    <a href='#'><i className={IconClass} aria-hidden='true' />{type}</a>
  </li>
)

export default SocialLogin(Button);
