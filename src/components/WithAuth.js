import React, { useState } from "react";

import { connect } from 'react-redux';

import { login } from "../actions";

export const withAuth = Component =>
  connect(
    state => ({ ...state }),
    { login }
  )(props => {
    const [isSignup, setSignup] = useState(false);

    const [form, setForm] = isSignup ? useState({
      name: '',
      email: '',
      donor: true,
      targetFunds: 0,
      location: '',
      password: '',
      confirmPassword: '',
      error: ''
    }) : useState({
      email: '',
      password: '',
      error: ''
    })

    const switchForm = () => {
      // Switch between login and signup
    }

    const signup = e => {
      // Dispatch proper action here
      e.preventDefault();
    }

    const login = e => {
      // Add some form validation here
      e.preventDefault();
      props.login(form.email, form.password);
    }

    const handleChange = event => {
      setForm({
        ...form,
        error: '',
        [event.target.name]: event.target.value
      })
    }

    return props.token ? (
      <Component {...props} />
    ) : isSignup ? (
      <div className="signup">Sign up page</div>
    ) : (
      <form onSubmit={login} className="login">
        <div className='form-field'>
          <label className='field-label'>E-mail</label>
          <input disabled={props.loggingIn} className='form-input' name='email' onChange={handleChange} type="text" />
        </div>
        <div className='form-field'>
          <label className='field-label'>Password</label>
          <input disabled={props.loggingIn} className='form-input' name='password' onChange={handleChange} type="password" />
        </div>
        <button disabled={props.loggingIn} className='form-btn' type="submit">Login</button>
      </form>
    );
  });
