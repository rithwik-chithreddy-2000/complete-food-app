import {
  CART_ERROR,
  CLEAR_CART,
  UPDATE_CART,
} from "../../../redux/types/cartTypes";
import api from "../../../utils/api";
import { setAlert } from "../../core/actions/alertAction";
import { loadUser } from "../../auth/action/authAction";

// Add Food in Cart
export const addCart = (id) => async (dispatch) => {
  try {
    await api.post("/cart/", id);

    dispatch({
      type: UPDATE_CART,
    });
    dispatch(loadUser());
    dispatch(setAlert("Items added in cart.", "success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: CART_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete Items in cart
export const deleteCartItem = (foodId) => async (dispatch) => {
  try {
    await api.delete(`/cart/${foodId}`);

    dispatch({
      type: UPDATE_CART,
    });
    dispatch(loadUser());
    dispatch(setAlert("Food Item Removed", "success"));
  } catch (err) {
    dispatch({
      type: CART_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete whole cart
export const deleteCart = () => async (dispatch) => {
  if (window.confirm("Are you sure? This can NOT be undone!")) {
    try {
      await api.delete("/cart/");

      dispatch({ type: CLEAR_CART });

      dispatch(setAlert("Cart removed"));
    } catch (err) {
      dispatch({
        type: CART_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  }
};

export const countQuantity = (arr, val) => (async) =>
  arr.reduce((count, food) => (food.id === val ? count + 1 : count), 0);

export const totalCost = (arr) =>
  arr.reduce((sum, food) => sum + food.foodCost, 0);

export const unique = (arr) => [
  ...new Map(arr.map((item) => [JSON.stringify(item), item])).values(),
];
