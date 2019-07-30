import React from 'react';

import { Link, NavLink } from 'react-router-dom';

import './styles/Navbar.scss';

const Navbar = props => {
  return (
    <div className='navbar'>
      <div className='left'>
        {/* Logo should go here */}
        <Link className='header' exact to='/'><h1 className='header'>Luncher</h1></Link>
        <NavLink exact to='/schools' className='navbar-btn' activeClassName='active'>Browse Schools</NavLink>
      {/* Conditional NavLink will go here, depending on whether account type is donor or school */}
      </div>
      <div className='right'>
        <div className='user'>Hello, User</div>
      </div>
    </div>
  );
};

export default Navbar;