import React,{Fragment} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {getTasks} from "./actions";
import Dashboard from "../../components/Dashboard";

class DashboardContainer extends React.Component {
    componentDidMount(){
        this.props.getTasks();
    }
    render() {
        return (
            <Fragment>
                <Dashboard/>
            </Fragment>
        )
    }
}
function mapStateToProps(state) {
    return { }
};

function mapDispatchToProps(dispatch){
    return bindActionCreators({getTasks}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
