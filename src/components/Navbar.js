import React from 'react';

import { Link, NavLink } from 'react-router-dom';

import './styles/Navbar.scss';

import { connect } from 'react-redux';

import { logout } from '../actions';

import logo from '../img/luncherlogo.png'

const Navbar = props => {
  return (
    <div className='navbar'>
      <div className='left'>
        {/* Logo should go here */}
        <Link className='header' to='/'><img src={logo} alt=''/></Link>
        <NavLink exact to='/schools' className='navbar-btn' activeClassName='active'>Browse Schools</NavLink>
        <NavLink exact to='/sdashboard' className='navbar-btn' activeClassName='active'>School Dashboard</NavLink>
      {/* Conditional NavLink will go here, depending on whether account type is donor or school */}
      </div>
      <div className='right'>
        { props.token ?
        <div className='user'>Hello, {props.username}
        <div onClick={props.logout} className='signout-btn'>LOGOUT</div></div>
      : <button onClick={() => props.history.push('/auth')} className='login-btn'>LOG IN</button>}
      </div>
    </div>
  );
};

export default connect(state => ({...state}), { logout })(Navbar);