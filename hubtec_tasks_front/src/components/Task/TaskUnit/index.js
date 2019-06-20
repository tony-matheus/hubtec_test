import React, {Component} from 'react';
import {Row, Col, Card, Icon, Dropdown, NavItem} from 'react-materialize';
import {ListFields} from '../../../objects/FormField';
import InvisibleButton from '../../../objects/InvisibleButton'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEraser, faCheck} from '@fortawesome/free-solid-svg-icons'

export default class  TaskUnit extends Component {
    constructor(props){
        super(props)
        this.delete_task = this.delete_task.bind();
        this.update_task_status = this.update_task_status.bind();
    }

    delete_task = event=>{
        this.props.delete_task({id: this.props.id, status: this.props.status});
    };

    update_task_status = event => {
        this.props.update_task_status({id: this.props.id, status: "done", old_status: this.props.status});
    };

    render(){
        return(
            <Card>
                <Row>
                    <Col s={6}>
                        Name: <b>{this.props.name}</b>
                    </Col>
                    <Col s={4}>
                        <ListFields>
                            <div>End Date: <b>{this.props.end_time}</b></div>
                            <div>Status: <b>{this.props.status}</b></div>
                        </ListFields>
                    </Col>
                    <Col s={2} m={2}>
                        <InvisibleButton hide={this.props.status !== "to_do"}>
                            <FontAwesomeIcon
                                style={"cursor: pointer"}
                                icon={faCheck}
                                size={"2x"}
                                onClick={this.update_task_status}
                                color={"rgba(48,239,52,0.81)"}
                            />
                        </InvisibleButton>
                        <InvisibleButton >
                            <FontAwesomeIcon
                                style={"cursor: pointer"}
                                icon={faEraser}
                                size={"2x"}
                                onClick={this.delete_task}
                                color={"#ef2626cf"}

                            />
                        </InvisibleButton>
                    </Col>
                </Row>
                <Row>
                    <Col s={12}>
                        <b>{this.props.description}</b>
                    </Col>
                </Row>
            </Card>
        )
    };
}

