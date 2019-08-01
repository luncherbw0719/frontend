import * as actions from '../actions';

const initialState = {
  token: '',
  loggingIn: false,
  loginError: '',
  username: 'User',
  schools: [],
  gettingSchools: false,
  getSchoolsError: ''
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
        token: action.payload
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
        token: false
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
    default: {
      return state;
    }
  }
}