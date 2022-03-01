import {
  REGISTER_SUCCESS,
  USER_LOADED,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
  LOGOUT,
  REGISTER_EDIT,
} from "../../../redux/types/userTypes";

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: true,
  token: localStorage.getItem("token"),
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      return state;

    case LOGIN_SUCCESS:
      return { ...state, ...payload, isAuthenticated: true, loading: false };

    case REGISTER_FAIL:
    case LOGIN_FAIL:
      return { ...state, token: null, isAuthenticated: false, loading: false };

    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };

    case LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false,
        token: null,
      };
    case REGISTER_EDIT:
      return {
        ...state,
        user: payload,
        loading: false,
      };
    default:
      return state;
  }
};
