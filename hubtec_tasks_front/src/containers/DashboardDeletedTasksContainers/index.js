import React,{Fragment} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getDeletedTasks} from "./actions";
import DashboardDeletedTasks from "../../components/Dashboard/DeletedTasks";
import {NavLink} from "react-router-dom";
import {FixedButton} from "../../objects/FormField";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faListAlt} from "@fortawesome/free-solid-svg-icons";

class DashboardDeletedTasksContainer extends React.Component {
    componentDidMount(){
        this.props.getDeletedTasks();
    }
    render() {
        return (
            <Fragment>
                <NavLink exact to="/dashboard/tasks">
                    <FixedButton top={650} right={10} style={{cursor: "pointer", "background-color" : "#b400ff"}}>
                        <span>Tasks</span>
                        <FontAwesomeIcon
                            style={{cursor: "pointer", "margin-left": 10+"px"}}
                            icon={faListAlt}
                            size={"1x"}
                            color={"rgba(48,239,52,0.81)"}
                            title="Deleted Tasks"
                        />
                    </FixedButton>
                </NavLink>
                <DashboardDeletedTasks/>
            </Fragment>
        )
    }
}
function mapStateToProps(state) {
    return { }
};

function mapDispatchToProps(dispatch){
    return bindActionCreators({getDeletedTasks}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardDeletedTasksContainer);
