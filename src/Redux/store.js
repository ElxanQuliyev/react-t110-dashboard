import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// 
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
