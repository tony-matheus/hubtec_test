import React, { Component } from 'react';

import DashboardContainer from "../../containers/DashboardContainer";
import CreateTask from "../../components/Task/CreateTask";

export default class DashboardPage extends Component{
    render() {
        return(
            <div className="">
                <DashboardContainer/>
                {/*<CreateTask/>*/}
            </div>
        );
    }
}
