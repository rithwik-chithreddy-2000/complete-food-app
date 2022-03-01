import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import combineReducers from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import setAuthToken from "../../utils/setAuthToken";

const initialState = {};
const middleware = [thunk];

const store = createStore(
  combineReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

let currentState = store.getState();

store.subscribe(() => {
  let previousState = currentState;
  currentState = store.getState();

  if (previousState.auth.token !== currentState.auth.token) {
    const token = currentState.auth.token;
    setAuthToken(token);
  }
});

export default store;
