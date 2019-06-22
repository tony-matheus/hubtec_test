import React, {Component, Fragment} from 'react';
import {Row, Col, Card, Icon, Dropdown, NavItem} from 'react-materialize';
import TaskUnit from "../TaskUnit";
import Title from '../../../objects/Title';
import ColumnList from '../../../objects/ColumnList';
import {Scroll, ContainerInline} from '../../../objects/View'

class TaskList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let to_do = this.props.to_do.length ? (this.props.to_do) : [];
        let in_progress = this.props.in_progress.length ? (this.props.in_progress) : [];
        let done = this.props.done.length ? (this.props.done) : [];
        return (
            <Fragment>
                <Scroll>
                    <ContainerInline>
                    <div style={{padding: 14+"px"}}>
                        <ColumnList>
                            <Title>To Do </Title>
                            {to_do.map((to_do, index) =>
                                <TaskUnit
                                    update_task_status={this.props.update_task_status}
                                    delete_task={this.props.delete_task}
                                    {...to_do}
                                    key={index}/>
                            )}
                        </ColumnList>
                    </div>
                    <div style={{padding: 14+"px"}}>
                        <ColumnList>
                            <Title>In Progress</Title>
                            {in_progress.map((in_progress, index) =>
                                <TaskUnit
                                    update_task_status={this.props.update_task_status}
                                    delete_task={this.props.delete_task}
                                    {...in_progress}
                                    key={index}/>
                            )}
                        </ColumnList>
                    </div>
                    <div style={{padding: 14+"px"}}>
                        <ColumnList>
                            <Title>Done</Title>
                            {done.map((done, index) =>
                                <TaskUnit update_task_status={this.props.update_task_status}
                                          delete_task={this.props.delete_task} {...done} key={index}/>
                            )}
                        </ColumnList>
                    </div>
                </ContainerInline>
                </Scroll>
            </Fragment>
        );
    }
}

export default TaskList;
