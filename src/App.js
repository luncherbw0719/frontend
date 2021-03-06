import React, { useEffect } from 'react';
import './App.css';

import { useToken } from './hooks';

import { setToken } from './actions';

import { connect } from 'react-redux';

import SchoolCard from "./components/SchoolCard";
import SchoolPageApp from './SchoolPageApp';

function App(props) {
  const [authToken, setAuthToken] = useToken();

  const init = () => {
    props.setToken(authToken, setAuthToken);
  }

  useEffect(init, []);

  return (
    <div className="App">
      <SchoolPageApp/> 
    </div>
  );
}

export default connect(state => ({...state}), { setToken })(App);
