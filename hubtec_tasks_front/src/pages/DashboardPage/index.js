import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import DashboardContainer from "../../containers/DashboardContainer";
import DashboardDeletedTasksContainers from "../../containers/DashboardDeletedTasksContainers";
import CreateTask from "../../components/Task/CreateTask";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {FixedButton} from "../../objects/FormField";

export default class DashboardPage extends Component{
    render() {
        return(
            <div className="">
                <Route exact path="/dashboard/tasks" component={DashboardContainer}>
                </Route>
                <Route exact path="/dashboard/deleted" component={DashboardDeletedTasksContainers}>
                </Route>
            </div>
        );
    }
}
