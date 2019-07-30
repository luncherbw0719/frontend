import React, { useEffect } from 'react';
import './App.css';

import { useToken } from './hooks';

import { setToken } from './actions';

import { connect } from 'react-redux';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import SchoolCard from "./components/SchoolCard";
import SchoolPageApp from './SchoolPageApp';

import { Route } from 'react-router-dom';

function App(props) {
  const [authToken, setAuthToken] = useToken();

  const init = () => {
    props.setToken(authToken, setAuthToken);
  }

  useEffect(init, []);

  return (
    <div className="App">
      <Navbar />
      <Route exact path='/' render={props => <Landing {...props} />} />
      <Route path='/schools' render={props => <SchoolPageApp {...props} />} />
      {/* Add more routes above this comment as necessary */}
    </div>
  );
}

export default connect(state => ({...state}), { setToken })(App);
