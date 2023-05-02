import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import { rootReducer } from "./root-reducer";
import { composeWithDevTools } from "@redux-devtools/extension";

import logger from "redux-logger";

export type RootState = ReturnType<typeof rootReducer>;

const middleware = [thunk, logger];

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
