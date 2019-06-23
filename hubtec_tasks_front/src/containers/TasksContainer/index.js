import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {createTask, deleteTask, update_task_status} from "./actions";
import {logout} from "../Auth/actions";
import TaskNew from "../../components/Task/TaskNew";
import {Row, Col} from 'react-materialize';
import TaskList from "../../components/Task/List";
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import {FixedButton} from "../../objects/FormField";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class TasksContainer extends React.Component{
    constructor(){
        super();
        this.create_task = this.create_task.bind(this);
        this.delete_task = this.delete_task.bind(this);
        this.update_task_status = this.update_task_status.bind(this);
        this.logout = this.logout.bind(this);
    };

    logout = event =>
    {
        this.props.logout()
    };

    create_task(task){
        this.props.createTask(task);
    }

    delete_task(data){
        this.props.deleteTask(data);
    }

    update_task_status(data, old_status = ""){
        this.props.update_task_status(data, old_status)
    }

    render() {
        console.log(this.props);
        let to_do = this.props.to_do.length ? this.props.to_do : [];
        let in_progress = this.props.in_progress.length ? this.props.in_progress : [];
        let done = this.props.done.length ? this.props.done : [];
        return(
            <Fragment>
                <FixedButton onClick={this.logout} top={700} right={10} style={{cursor: "pointer", "background-color" : "red"}}>
                    <span>Logout</span>
                    <FontAwesomeIcon
                        style={{cursor: "pointer", "margin-left": 10+"px"}}
                        icon={faSignOutAlt}
                        size={"1x"}
                        color={"rgba(48,239,52,0.81)"}
                        title="Logout"
                    />
                </FixedButton>
                <Row>
                 <Col>
                    <TaskNew handleSubmit={this.create_task}/>
                 </Col>
                </Row>
                <Row>
                    <TaskList
                        delete_task={this.delete_task}
                        update_task_status={this.update_task_status}
                        in_progress={in_progress}
                        to_do={to_do}
                        done={done}/>
                </Row>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        to_do: state.to_do,
        done: state.done,
        in_progress: state.in_progress
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ createTask, deleteTask, update_task_status, logout }, dispatch)
}

export default connect(mapStateToProps , mapDispatchToProps)(TasksContainer)

