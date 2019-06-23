import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Global from './styles/settings/';
import Reset from './styles/generic';
import Base from './styles/generic';


import { Provider } from 'react-redux';
import Store from './configureStore';

ReactDOM.render(
    <Fragment>
        <Global.Colors/>
        <Global.Size/>
        <Base/>
        <Reset/>
        <Provider store={Store}>
            <App />
        </Provider>
    </Fragment>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
