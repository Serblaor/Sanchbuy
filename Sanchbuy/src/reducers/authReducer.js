import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGOUT_USER,
} from "../constants/actionTypes";
import { users } from "../mocks/usuarios";

const initialState = {
  user: null,
  isLoggedIn: false,
  isLoggingIn: false,
  loginError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      const u = users.find(
        (x) =>
          x.email == action.payload.email &&
          x.password == action.payload.password
      );
      if (u) {
        return {
          ...state,
          user: u,
          isLoggingIn: true,
        };
      }
      return {
        ...state,
        user: u,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoggingIn: false,
        user: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
