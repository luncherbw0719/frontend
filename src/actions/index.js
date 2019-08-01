import axios from 'axios';

export const SET_TOKEN = "SET_TOKEN";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";
export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const setToken = token => dispatch => {
  dispatch({
    type: SET_TOKEN,
    payload: token
  });
};

export const signup = (creds) => dispatch => {
  // SIGNUP FUNCTIONALITY
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
      payload: res.data.access_token });
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
