import { applyMiddleware, combineReducers, compose, createStore, ReducersMapObject, Middleware } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

/**
 * initiliaze the instance of the redux store
 * @param {ReducersMapObject<S, any>}  reducers - an objec containing the reducers you want to insert in your store like that: `{myReducer: myReducerObject}`
 * @param {Middleware<{}, any, any>[]}  middlewares - An array containing the possible middlewares you want to add to your store
 * @return {Store} Return the redux store instance
 */
export const initRedux = <S>(reducers?: ReducersMapObject<S, any>, middlewares?: Middleware<{}, any, any>[]) => {
  middlewares = middlewares ?? []
  const history = createBrowserHistory();
  const reducer = combineReducers({
    ...reducers,
    router: connectRouter(history),
  });
  const composeEnhancer: typeof compose =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(...middlewares, routerMiddleware(history)))
  )
  return {store: store, reducer: reducer, history: history};
}

export default initRedux;
