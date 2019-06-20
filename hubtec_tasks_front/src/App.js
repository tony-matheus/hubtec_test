import React, { Component, Fragment } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Auth from './pages/Auth';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Fragment>
            <Switch>
              <Route path="/" component={Auth}/>
            </Switch>
          </Fragment>
        </BrowserRouter>
    );
  }
}

export default App;
