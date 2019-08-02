import * as actions from '../actions';

const initialState = {
  token: '',
  name: '',
  loggingIn: false,
  loginError: '',
  username: 'User',
  schools: [],
  gettingSchools: false,
  getSchoolsError: '',
  signupError: '',
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.SET_TOKEN: {
      //EXPECTED PAYLOAD:
      // { get, set }
      return {
        ...state,
        token: action.payload
      }
    }
    case actions.LOGIN_START: {
      return {
        ...state,
        loginError: '',
        loggingIn: true
      }
    }
    case actions.LOGIN_SUCCESS: {
      //EXPECTED PAYLOAD:
      // token
      // if(state.setToken)
      //   state.setToken(action.payload);

      return {
        ...state,
        loggingIn: false,
        token: action.payload.access_token,
        name: action.payload.name
      }
    }
    case actions.LOGIN_FAILURE: {
      //EXPECTED PAYLOAD:
      // error message

      return {
        ...state,
        loginError: action.payload,
        loggingIn: false
      }
    }
    case actions.LOGOUT: {
      return {
        ...state,
        token: false,
        name: ''
      }
    }
    case actions.GETSCHOOLS_START: {
      return {
        ...state,
        gettingSchools: true,
        getSchoolsError: ''
      }
    }
    case actions.GETSCHOOLS_SUCCESS: {
      return {
        ...state,
        gettingSchools: false,
        schools: action.payload
      }
    }
    case actions.GETSCHOOLS_FAILURE: {
      return {
        ...state,
        gettingSchools: false,
        getSchoolsError: action.payload
      }
    }
    case actions.SIGNUP_START: {
      return {
        ...state,
        loggingIn: true,
        signupError: ''
      }
    }
    case actions.SIGNUP_SUCCESS: {
      return {
        ...state,
        loggingIn: false,
        token: action.payload.access_token,
        name: action.payload.name
      }
    }
    case actions.SIGNUP_FAILURE: {
      return {
        ...state,
        loggingIn: false,
        signupError: action.payload
      }
    }
    default: {
      return state;
    }
  }
}