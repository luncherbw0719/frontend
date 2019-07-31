import React, { useEffect } from "react";
import "./App.css";

import { setToken } from "./actions";

import { connect } from "react-redux";

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import SchoolBrowse from './components/SchoolBrowse';
import SchoolPage from './components/SchoolPage';

import { Route } from 'react-router-dom';

import SchoolDonor from './components/SchoolDonor';

function App(props) {
  const init = () => {
    props.setToken(localStorage.getItem('token'));
  };

  useEffect(init, []);

  const fakeSchool = {
    name: "Woodbridge",
    location: "Irvine",
    currentFunds: 1000,
    fundGoal: 4000,
    schoolId: 0,
    donors: []
  }

  return (
    <div className="App">
      <Navbar />
      <Route exact path='/' render={props => <Landing {...props} />} />
      <Route path='/schools' render={props => <SchoolBrowse {...props} />} />
      <Route path='/sdashboard' render={props => <SchoolPage {...props} dashboard school={fakeSchool} />} />
      {/* Add more routes above this comment as necessary */}
    </div>
  );
}

export default connect(
  state => ({ ...state }),
  { setToken }
)(App);
