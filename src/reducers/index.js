import * as actions from '../actions';

const initialState = {
  token: '',
  setToken: null,
  loggingIn: false,
  loginError: ''
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.SET_TOKEN: {
      //EXPECTED PAYLOAD:
      // { get, set }
      return {
        ...state,
        token: action.payload.get,
        setToken: action.payload.set
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
      if(state.setToken)
        state.setToken(action.payload);

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
    default: {
      return state;
    }
  }
}