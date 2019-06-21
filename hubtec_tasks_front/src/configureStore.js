import { createStore, applyMiddleware } from "redux";
import Reducers from './reducers';
import thunk from 'redux-thunk';

// Routes imports
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'


export const history = createHistory();
const history_middleware = routerMiddleware(history);
// End routes imports

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const Store = createStore(Reducers, devtools, applyMiddleware(history_middleware, thunk));

export default Store;
