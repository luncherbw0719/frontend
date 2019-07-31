import React from 'react';

import { Link, NavLink } from 'react-router-dom';

import './styles/Navbar.scss';

import { connect } from 'react-redux';

import { logout } from '../actions';

const Navbar = props => {
  return (
    <div className='navbar'>
      <div className='left'>
        {/* Logo should go here */}
        <Link className='header' to='/'><h1 className='header'>Luncher</h1></Link>
        <NavLink exact to='/schools' className='navbar-btn' activeClassName='active'>Browse Schools</NavLink>
        <NavLink exact to='/sdashboard' className='navbar-btn' activeClassName='active'>School Dashboard</NavLink>
      {/* Conditional NavLink will go here, depending on whether account type is donor or school */}
      </div>
      <div className='right'>
        <div className='user'>Hello, User</div>
        {props.token && <button onClick={() => props.logout(props.token)}>Logout</button>}
      </div>
    </div>
  );
};

export default connect(state => ({...state}), { logout })(Navbar);