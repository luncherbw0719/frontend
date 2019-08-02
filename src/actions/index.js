import axios from 'axios';

export const SET_TOKEN = "SET_TOKEN";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";
export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const GETSCHOOLS_START = 'GETSCHOOLS_START';
export const GETSCHOOLS_SUCCESS = 'GETSCHOOLS_SUCCESS';
export const GETSCHOOLS_FAILURE = 'GETSCHOOLS_FAILURE';

export const setToken = token => dispatch => {
  dispatch({
    type: SET_TOKEN,
    payload: token
  });
};

export const signup = (creds) => dispatch => {
  // SIGNUP FUNCTIONALITY
  const info = creds.accountType === 'donor' ? {
    name: creds.name,
    isdonor: true,
  } : {
    'name': creds.name,
    'location': creds.location,
    'fundgoals': creds.targetFunds
  }

  dispatch({
    type: SIGNUP_START
  })
  return axios.post(`https://schooldonations-luncher.herokuapp.com/signup/${creds.email}/${creds.password}`, info, {
    headers: { Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
      'Content-Type': 'application/JSON',
    }
  })
  .then(res => {
    console.log(res);
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data
    })
  })
  .catch(err => {
    console.log(err.message);
    dispatch({
      type: SIGNUP_FAILURE,
      payload: "An error occured while attempting to create your account"
    })
  })
}

export const login = (username, password) => dispatch => {
  let creds = `grant_type=password&username=${username}&password=${password}`;

  dispatch({ type: LOGIN_START });
  return axios    
    .post('https://schooldonations-luncher.herokuapp.com/login', creds, {
      headers: { Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
    .then(res => {
      console.log(res.data);
      localStorage.setItem('token', res.data.access_token);
      dispatch({ type: LOGIN_SUCCESS,
      payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: LOGIN_FAILURE,
        payload: err.message
      })
    });
};

export const logout = token => dispatch => {
  console.log('signing out');
  localStorage.setItem('token', '');
  dispatch({
    type: LOGOUT
  })
  return axios    
    .get('https://schooldonations-luncher.herokuapp.com/oauth/revoke-token', {
      headers: { Authorization: `Bearer ${token}` }
    })
};

export const getSchools = () => dispatch => {
  dispatch({
    type: GETSCHOOLS_START
  })
  return axios.get('https://schooldonations-luncher.herokuapp.com/schools/schools')
  .then(res => {
    console.log(res);
    dispatch({
      type: GETSCHOOLS_SUCCESS,
      payload: res.data
    })
  })
  .catch(err => {
    console.log(err);
    dispatch({
      type: GETSCHOOLS_FAILURE,
      payload: "There was an error retrieving schools. Please try again later."
    })
  })
}