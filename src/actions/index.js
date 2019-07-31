import axios from 'axios';

export const SET_TOKEN = "SET_TOKEN";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT_START = "LOGOUT_START";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const setToken = token => dispatch => {
  dispatch({
    type: SET_TOKEN,
    payload: token
  });
};

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

export const logout = () => dispatch => {};
