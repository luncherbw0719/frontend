import React, { useState } from "react";

import { connect } from 'react-redux';

import { login, signup } from "../actions";

import './styles/WithAuth.scss';

export const withAuth = Component =>
  connect(
    state => ({ ...state }),
    { login, signup }
  )(props => {
    const [isSignup, setSignup] = useState(false);

    const [form, setForm] = isSignup ? useState({
      name: '',
      email: '',
      accountType: 'donor',
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
      if(isSignup) {
        setSignup(false);
      } else {
        setSignup(true);
      }

      isSignup ? setForm({
        name: '',
        email: '',
        accountType: 'donor',
        targetFunds: 0,
        location: '',
        password: '',
        confirmPassword: '',
        error: ''
      }) : setForm({
        email: '',
        password: '',
        error: ''
      })
    }

    const setError = error => {
      setForm({
        ...form,
        error
      })
    }

    const signup = e => {
      // Dispatch proper action here
      e.preventDefault();
      if(form.name.trim() === '') {
        setError("Name is required!");
        return;
      }
      if(form.email.trim() === '') {
        setError("Email is required!");
        return;
      }
      if(form.accountType === 'school' && form.location.trim() === '') {
        setError("Location is required for schools!");
        return;
      }
      if(form.accountType === 'school' && form.targetFunds.trim() === '') {
        setError("Target funds required!");
        return;
      }
      if(form.name.trim() === '') {
        setError("Name is required!");
        return;
      }
      if(form.password !== form.confirmPassword) {
        setError("Passwords do not match!");
        return;
      }

      props.signup(form);
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

    console.log(form.accountType);

    return props.token ? (
      <Component {...props} />
    ) : isSignup ? (
      <form onSubmit={signup} className="login">
        <h1>Sign up</h1>
        <div className='form-field'>
          <label className='field-label'>E-mail</label>
          <input disabled={props.loggingIn} className='field-input' name='email' onChange={handleChange} type="email" />
        </div>
        <div className='form-field'>
          <label className='field-label'>Password</label>
          <input disabled={props.loggingIn} className='field-input' name='password' onChange={handleChange} type="password" />
        </div>
        <div className='form-field'>
          <label className='field-label'>Confirm password</label>
          <input disabled={props.loggingIn} className='field-input' name='confirmPassword' onChange={handleChange} type="password" />
        </div>
        <div className='form-field'>
          <label className='field-label'>Location (City, State)</label>
          <input disabled={props.loggingIn} className='field-input' name='location' onChange={handleChange} type="text" />
        </div>
        <div className='form-field'>
          <label className='field-label'>Account Type</label>
          <div className='radio'>
          <label>
            <input disabled={props.loggingIn} className='field-input' name='accountType' onChange={handleChange} type="radio" value="donor" checked={form.accountType === 'donor'} />
            Donor
          </label>
          <label>
            <input disabled={props.loggingIn} className='field-input' name='accountType' onChange={handleChange} type="radio" value="school" checked={form.accountType === 'school'} />
            School
          </label>
          </div>
        </div>
        <div className='form-field'>
          <label className='field-label'>{form.accountType === 'donor' ? 'Name' : 'School Name'}</label>
          <input disabled={props.loggingIn} className='field-input' name='name' onChange={handleChange} type="text" />
        </div>
        {
          form.accountType === 'school' &&
          <div className='form-field'>
            <label className='field-label'>Target Amount</label>
            <span className='dollarsign'>$</span>
            <input disabled={props.loggingIn} className='field-input' name='targetFunds' onChange={handleChange} type="number" />
          </div>
        }
        <button disabled={props.loggingIn} className='form-btn' type="submit">Create account</button>
        {form.error && <div className='error'>
          {form.error}
        </div>}
        {props.signupError && <div className='error'>
          {props.signupError}
        </div>}
        <div className='switch'>
          Already have an account? <span onClick={switchForm} className='signup-btn'>Log in here</span>!
        </div>
      </form>
    ) : (
      <form onSubmit={login} className="login">
        <h1>Log in</h1>
        <div className='form-field'>
          <label className='field-label'>E-mail</label>
          <input disabled={props.loggingIn} className='field-input' name='email' onChange={handleChange} type="text" />
        </div>
        <div className='form-field'>
          <label className='field-label'>Password</label>
          <input disabled={props.loggingIn} className='field-input' name='password' onChange={handleChange} type="password" />
        </div>
        <button disabled={props.loggingIn} className='form-btn' type="submit">Login</button>
        {form.error && <div className='error'>
          {form.error}
        </div>}
        {props.loginError && <div className='error'>
          {props.loginError}
        </div>}
        <div className='switch'>
          Don't have an account? <span onClick={switchForm} className='signup-btn'>Create one here</span>!
        </div>
      </form>
    );
  });
