import React, { Component, Fragment } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Auth from './pages/Auth';
import DashboardPage from "./pages/DashboardPage";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckCircle, faTrashAlt)

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Fragment>
            <Switch>
              <Route path="/auth" component={Auth}/>
              <Route path="/dashboard" component={DashboardPage}/>
            </Switch>
          </Fragment>
        </BrowserRouter>
    );
  }
}

export default App;
