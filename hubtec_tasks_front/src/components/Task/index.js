import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';
import TaskList from "./List";
class Tasks extends Component {
    render() {
        return (
            <Row>
                <Col s={6} className="tasks_list">
                    <p className="title">To-do</p>
                    <TaskList/>
                </Col>
                <Col s={6} className="tasks_list">
                    <p className="title">Done</p>
                    <TaskList/>
                </Col>
            </Row>
        );
    }
}

export default Tasks;
