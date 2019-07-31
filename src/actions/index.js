export const SET_TOKEN = "SET_TOKEN";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT_START = "LOGOUT_START";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const setToken = (token, setToken) => dispatch => {
  dispatch({
    type: SET_TOKEN,
    payload: {
      get: token,
      set: setToken
    }
  });
};

export const login = (username, password) => dispatch => {};

export const logout = () => dispatch => {};
