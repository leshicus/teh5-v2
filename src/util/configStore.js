import thunk from "redux-thunk";
import { routerMiddleware as createRouterMiddleware } from "react-router-redux";
import throttle from "lodash/throttle";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { getLocalState, saveLocalState } from "./localState";
import reducers from "./../reducers";

const configStore = history => {
    const routerMiddleware = createRouterMiddleware(history);

    const middlewares = [
        thunk,
        routerMiddleware /*, orchestrate(processManager)*/
    ];

    if (process.env.NODE_ENV !== "production") {
    }

    let initialState = getLocalState();
    initialState = Object.assign({}, initialState);

    const store = createStore(
        reducers,
        initialState,
        composeWithDevTools(applyMiddleware(...middlewares))
    );

    // store.subscribe(
    //     throttle(() => {
    //         // * 1 раз/с сохраняет state в localStorage
    //         saveLocalState({
    //             auth: store.getState().auth,
    //             intl: {
    //                 locale: store.getState().intl.locale
    //             }
    //         });
    //     }, 1000)
    // );

    return store;
};

export default configStore;
