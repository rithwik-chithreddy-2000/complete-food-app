import {
  REGISTER_SUCCESS,
  USER_LOADED,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  LOGOUT,
  LOGIN_FAIL,
  REGISTER_EDIT,
  USER_DELETED,
  AUTH_ERROR,
} from "../../../redux/types/userTypes";
import api from "../../../utils/api";
import { setAlert } from "../../core/actions/alertAction";

export const register = (formData, navigate) => async (dispatch) => {
  try {
    await api.post("/auth/register", formData);
    dispatch(setAlert("User successfully registered!", "success"));
    dispatch({ type: REGISTER_SUCCESS });
    navigate("/auth/login");
  } catch (err) {
    const subErrors = err.response.data.subErrors;
    if (subErrors) {
      subErrors.forEach((error) =>
        dispatch(setAlert(`${error.field} ${error.message}`, "danger"))
      );
    }
    dispatch({ type: REGISTER_FAIL });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get("/auth/");
    const { id, email, name, password, address, roles, cart } = res.data;
    var isAdmin = false;
    roles.forEach((role) => {
      if (role.roleName === "ROLE_ADMIN") {
        isAdmin = true;
      }
    });
    dispatch({
      type: USER_LOADED,
      payload: { id, email, name, password, address, roles, cart, isAdmin },
    });
  } catch (err) {}
};

export const login = (formData, navigate) => async (dispatch) => {
  try {
    const res = await api.post("/auth/authenticate", formData);
    dispatch(setAlert("User successfully logged in!", "success"));

    const { id, email, tokenType, roles } = res.data;
    const token = "Bearer " + res.data.token;
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { token, user: { id, email, tokenType, roles } },
    });
    dispatch(loadUser());
    navigate("/");
  } catch (err) {
    dispatch(setAlert("Invalid Credentials!", "danger"));
    dispatch({ type: LOGIN_FAIL });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
};

export const editUser = (formData, id) => async (dispatch) => {
  try {
    const res = await api.put(`/users/${id}`, formData);

    dispatch(setAlert("User successfully edited!", "success"));
    dispatch({
      type: REGISTER_EDIT,
      payload: res.data,
    });
  } catch (err) {
    dispatch(setAlert("Invalid Credentials!", "danger"));
  }
};

export const deleteUser = (id) => async (dispatch) => {
  if (window.confirm("Are you sure? This can NOT be undone!")) {
    try {
      await api.delete(`/users/${id}`);

      dispatch({ type: USER_DELETED });

      dispatch(setAlert("Your account has been permanently deleted"));
    } catch (err) {
      dispatch(setAlert("User not Deleted!", "danger"));
      dispatch({ type: AUTH_ERROR });
    }
  }
};
