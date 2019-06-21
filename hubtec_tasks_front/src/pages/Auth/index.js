import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

export default class Auth extends Component{
    render() {
        return(
            <div className="Login">
                <Login/>
                {/*<Route exact path="/" component={Register}>*/}
                {/*</Route>*/}
                {/*<Route exact path="/sign-in" component={Login}>*/}
                {/*</Route>*/}
            </div>
        );
    }
}
