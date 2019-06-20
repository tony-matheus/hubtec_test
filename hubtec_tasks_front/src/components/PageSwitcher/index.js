import React, { Fragment, Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import SignInContainer from '../../containers/Auth/SignInContainer';
import SignUpContainer from '../../containers/Auth/SignUpContainer';

import './style.css'
export default class PageSwitcher extends Component{
    render() {
        return(
            <Fragment>
                <div className="PageSwitcher">
                    <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                    <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
                </div>

                <div className="FormTitle">
                    <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link"> Sign In </NavLink>
                    or
                    <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
                </div>
                <Route exact path="/" component={SignUpContainer}>
                </Route>
                <Route path="/sign-in" component={SignInContainer}>
                </Route>
            </Fragment>
        );
    }
}
