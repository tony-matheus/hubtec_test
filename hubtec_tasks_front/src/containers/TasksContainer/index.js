import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createTask, deleteTask, update_task_status} from "./actions";
import TaskNew from "../../components/Task/TaskNew";
import { Row, Col } from 'react-materialize';
import TaskList from "../../components/Task/List";
// import { logout } from './actions';


class TasksContainer extends React.Component{
    constructor(){
        super();
        this.create_task = this.create_task.bind(this);
        this.delete_task = this.delete_task.bind(this);
        this.update_task_status = this.update_task_status.bind(this);
    }
    // logout = event =>
    // {
    //     this.props.logout()
    // }

    create_task(task){
        this.props.createTask(task);
    }

    delete_task(data){
        this.props.deleteTask(data);
    }

    update_task_status(data){
        this.props.update_task_status(data)
    }

    render() {
        console.log(this.props)
        var to_do = this.props.to_do.length ? this.props.to_do : [];
        var in_progress = this.props.in_progress.length ? this.props.in_progress : [];
        var done = this.props.done.length ? this.props.done : [];
        return(
            <Fragment>
                <Row>
                 <Col>
                    <TaskNew handleSubmit={this.create_task}/>
                 </Col>
                </Row>
                <Row>
                    <TaskList delete_task={this.delete_task} update_task_status={this.update_task_status} to_do={to_do} done={done}/>
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
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ createTask, deleteTask, update_task_status }, dispatch)
}

export default connect(mapStateToProps , mapDispatchToProps)(TasksContainer)

