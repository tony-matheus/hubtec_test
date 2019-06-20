import React, { Component, Fragment } from 'react';
import { Row, Col, Card, Icon, Dropdown, NavItem } from 'react-materialize';
import TaskUnit from "../TaskUnit";
import Title from '../../../objects/Title';
import ColumnList from '../../../objects/ColumnList';
class TaskList extends Component {
    constructor(props){
        super(props);
    }

    render() {
        console.log(this.props)
        var to_do = this.props.to_do.length ? (this.props.to_do) : [];
        var done = this.props.done.length ? (this.props.done) : [];
        return (
            <Fragment>
                <Row>
                    <Col s={6}>
                        <ColumnList>
                            <Title>To Do Tasks</Title>
                            {to_do.map((to_do, index) =>
                                <TaskUnit update_task_status={this.props.update_task_status} delete_task={this.props.delete_task} {...to_do} key={index}/>
                            )}
                        </ColumnList>
                    </Col>
                    <Col s={6}>
                        <Title >Done Tasks</Title>
                        {done.map((done, index) =>
                            <TaskUnit update_task_status={this.props.update_task_status} delete_task={this.props.delete_task} {...done} key={index}/>
                        )}
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default TaskList;
