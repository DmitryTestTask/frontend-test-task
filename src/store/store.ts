import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { messagesReducer, rateReducer } from "./reducers";

const reducers = combineReducers({
  rate: rateReducer,
  messages: messagesReducer,
});

const middlewares = [thunk];
const enhancer = compose(applyMiddleware(...middlewares));
export const store = createStore(reducers, {}, enhancer);
