import rootReducers from "./rootReducers";
import { createStore, applyMiddleware, compose } from "redux";
import { createWrapper } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSagas";

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));

const makeStore = () => {
    const store = createStore(rootReducers, enhancer)
    sagaMiddleware.run(rootSaga)
    return store;
}

export const wrapper = createWrapper(makeStore)
