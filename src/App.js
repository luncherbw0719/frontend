import React, { useEffect } from "react";
import "./App.css";

import { useToken } from "./hooks";

import { setToken } from "./actions";

import { connect } from "react-redux";

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import SchoolBrowse from './components/SchoolBrowse';
import SchoolPage from './components/SchoolPage';

import { Route } from 'react-router-dom';

function App(props) {
  const [authToken, setAuthToken] = useToken();

  const init = () => {
    props.setToken(authToken, setAuthToken);
  };

  useEffect(init, []);

  const fakeSchool = {
    name: "Woodbridge",
    location: "Irvine",
    currentFunds: 1000,
    neededFunds: 400,
    schoolId: 0
  }

  return (
    <div className="App">
      <Navbar />
      <Route exact path='/' render={props => <Landing {...props} />} />
      <Route path='/schools' render={props => <SchoolBrowse {...props} />} />
      <Route path='/sdashboard' render={props => <SchoolPage {...props} school={fakeSchool} />} />
      {/* Add more routes above this comment as necessary */}
    </div>
  );
}

export default connect(
  state => ({ ...state }),
  { setToken }
)(App);
