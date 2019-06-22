import React,{Fragment} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {NavLink} from 'react-router-dom';
import {getTasks} from "./actions";
import Dashboard from "../../components/Dashboard";
import {FixedButton} from "../../objects/FormField";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

class DashboardContainer extends React.Component {
    componentDidMount(){
        this.props.getTasks();
    }
    render() {
        return (
            <Fragment>
                <NavLink exact to="/dashboard/deleted">
                    <FixedButton top={650} right={10} style={{cursor: "pointer", "background-color" : "#b400ff"}}>
                        <span>Thrash</span>
                        <FontAwesomeIcon
                            style={{cursor: "pointer", "margin-left": 10+"px"}}
                            icon={faTrash}
                            size={"1x"}
                            color={"rgba(48,239,52,0.81)"}
                            title="Deleted Tasks"
                        />
                    </FixedButton>
                </NavLink>
                <Dashboard/>
            </Fragment>
        )
    }
}
function mapStateToProps() {
    return { }
};

function mapDispatchToProps(dispatch){
    return bindActionCreators({getTasks}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
