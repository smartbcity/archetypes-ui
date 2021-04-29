import { applyMiddleware, combineReducers, compose, createStore, Middleware, Reducer, AnyAction } from "redux";
import { connectRouter, routerMiddleware, RouterState } from "connected-react-router";
import { createBrowserHistory } from "history";

/**
 * initiliaze the instance of the redux store
 * @param {Reducers extends { [key: string]: Reducer<any, AnyAction> }}  reducers - an object containing the reducers you want to insert in your store like that: `{myReducer: myReducerObject}`
 * @param {Middleware<{}, any, any>[]}  middlewares - An array containing the possible middlewares you want to add to your store
 * @return {Store} Return the redux store instance
 */
export const initRedux = <Reducers extends { [key: string]: Reducer<any, AnyAction> }>(reducers?: Reducers, middlewares?: Middleware<{}, any, any>[]) => {
  middlewares = middlewares ?? []
  const history = createBrowserHistory();

  const reducersCombination: {
    router: Reducer<RouterState<unknown>, AnyAction>;
  } & Reducers = Object.assign(reducers, { router: connectRouter(history) })

  const reducer = combineReducers<typeof reducersCombination>(reducersCombination);

  const composeEnhancer: typeof compose =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(...middlewares, routerMiddleware(history)))
  )
  return { store: store, reducer: reducer, history: history };
}

export default initRedux;
