import {
    legacy_createStore as createStore,
    applyMiddleware,
    compose,
} from "redux";
import thunk from "redux-thunk";
import { reducers } from "../reducers";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = { ChatReducer: { userName: "", userAge: 0, userPage: 0 } };

const store = createStore(reducers, persistedState, composeEnhancers(applyMiddleware(thunk)));

export default store;