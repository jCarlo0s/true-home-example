import rootReducers from "./reducers/rootReducers";
import { createStore, applyMiddleware, compose } from "redux";
import { createWrapper } from "next-redux-wrapper"

const middleware = []
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));

const makeStore = () => createStore(
    rootReducers,
    enhancer
)

export const wrapper = createWrapper(makeStore)
