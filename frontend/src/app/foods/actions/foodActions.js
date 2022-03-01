import {
  ADD_FOOD,
  CLEAR_FOOD,
  FOOD_DELETED,
  FOOD_ERROR,
  GET_FOOD,
  GET_FOODS,
  GET_FOODS_BY_TYPE,
  UPDATE_FOOD,
} from "../../../redux/types/foodTypes";
import api from "../../../utils/api";
import { setAlert } from "../../core/actions/alertAction";

// Get all foods
export const getFoods = () => async (dispatch) => {
  dispatch({ type: CLEAR_FOOD });

  try {
    const res = await api.get("/food/");

    dispatch({
      type: GET_FOODS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: FOOD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//change

// Get food by ID
export const getFoodById = (foodId) => async (dispatch) => {
  try {
    const res = await api.get(`/food/${foodId}`);

    dispatch({
      type: GET_FOOD,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: FOOD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add Food
export const addFood = (formData, navigate) => async (dispatch) => {
  try {
    const res = await api.post("/food/", formData);
    console.log(formData);
    dispatch({
      type: ADD_FOOD,
      payload: res.data,
    });

    dispatch(setAlert("Food Added", "success"));

    navigate("/");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: FOOD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete Food
export const deleteFoodById = (foodId, navigate) => async (dispatch) => {
  try {
    const res = await api.delete(`/food/${foodId}`);

    dispatch({
      type: FOOD_DELETED,
      payload: res.data,
    });

    dispatch(setAlert("Food Deleted", "success"));

    navigate("/");
  } catch (err) {
    dispatch({
      type: FOOD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Edit or update Food
export const updateFood = (foodId, formData, navigate) => async (dispatch) => {
  try {
    const res = await api.put(`/food/${foodId}`, formData);
    dispatch({
      type: UPDATE_FOOD,
      payload: res.data,
    });

    dispatch(setAlert("Food updated", "success"));

    navigate("/");
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: FOOD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
// Get food by type
export const getFoodByType = (foodType) => async (dispatch) => {
  try {
    const res = await api.get(`/food/type/${foodType}`);

    dispatch({
      type: GET_FOODS_BY_TYPE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: FOOD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
