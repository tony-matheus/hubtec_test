import React, {Component, Fragment} from 'react';
import {Row, Col, Card, Icon, Textarea, TextInput} from 'react-materialize';
import {FormFieldButton, ListFields} from '../../../objects/FormField';
import InvisibleButton from '../../../objects/InvisibleButton'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEraser, faCheck, faPencilAlt} from '@fortawesome/free-solid-svg-icons'
import {ViewData, EditData} from "../../../objects/View";
import Options from '../../../objects/Options';

export default class TaskUnit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hide: false,
            task: {
                name: '',
                description: '',
                end_time: '',
                status: ''
            }
        };
        this.delete_task = this.delete_task.bind();
        this.update_task_status = this.update_task_status.bind();
    }

    delete_task = event => {
        this.props.delete_task({id: this.props.id, status: this.props.status});
    };

    update_task_status = event => {
        this.props.update_task_status({id: this.props.id, task: {status: "done"}}, this.props.status);
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log({id: this.props.id, task: this.state.task});
        this.props.update_task_status({id: this.props.id, task: this.state.task});
        this.setState({hide: !this.state.hide})
        // this.clearForm();
    };

    showEdit = event => {
        this.setState({hide: !this.state.hide, task: this.props})
    };

    handleChange = event => {
        const task = {...this.state.task};
        let target = event.target;
        task[target.name] = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({task})
    };


    render() {
        return (
            <Fragment>
                <ViewData hide={this.state.hide}>
                    <Card>
                        <Row>
                            <Col s={6}>
                                <div onDoubleClick={this.showEdit}>Name: <b>{this.props.name}</b></div>
                            </Col>
                            <Col s={4}>
                                <ListFields>
                                    <div onDoubleClick={this.showEdit}>End Date: <b>{this.props.end_time}</b></div>
                                    <div>Status: <b>{this.props.status}</b></div>
                                </ListFields>
                            </Col>
                            <Col s={2} m={2}>
                                <Options>
                                    <InvisibleButton hide={this.props.status !== "to_do"}>
                                        <FontAwesomeIcon
                                            style={"cursor: pointer"}
                                            icon={faCheck}
                                            size={"2x"}
                                            onClick={this.update_task_status}
                                            color={"rgba(48,239,52,0.81)"}
                                        />
                                    </InvisibleButton>
                                    <InvisibleButton>
                                        <FontAwesomeIcon
                                            style={"cursor: pointer"}
                                            icon={faEraser}
                                            size={"2x"}
                                            onClick={this.delete_task}
                                            color={"#ef2626cf"}

                                        />
                                    </InvisibleButton>
                                </Options>
                            </Col>
                        </Row>
                        <Row>
                            <Col s={12}>
                                <div onDoubleClick={this.showEdit}><b>{this.props.description}</b></div>
                            </Col>
                        </Row>
                    </Card>
                </ViewData>
                <EditData hide={(this.state.hide)}>
                    <Card>
                        <form onSubmit={this.handleSubmit}>
                            <Row>
                                <Col s={6}>
                                    <div>
                                        <TextInput
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={this.state.task.name}
                                            onChange={this.handleChange}
                                            s={8}
                                            maxLength="200"
                                            label="Task Name"
                                            required/>
                                    </div>
                                </Col>
                                <Col s={4}>
                                    <ListFields>
                                        <TextInput
                                            type="date"
                                            id="end_time"
                                            name="end_time"
                                            value={this.state.task.end_time}
                                            onChange={this.handleChange}
                                            s={12}
                                            maxLength="200"
                                            required
                                            label="Task End Time"
                                        />
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
                                    <InvisibleButton>
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
                                    <div>
                                        <Textarea
                                            id="description"
                                            name="description"
                                            s={4} m={4} l={11} xl={12}
                                            value={this.state.task.description}
                                            onChange={this.handleChange}
                                            maxLength="200"
                                            label="Task Description"
                                            required/>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <div style={{float: "left"}}>
                                    <FormFieldButton onClick={this.showEdit}>Close</FormFieldButton>
                                </div>
                                <div style={{float: "right"}}>
                                    <FormFieldButton primary type="submit">Salvar</FormFieldButton>
                                </div>
                            </Row>
                        </form>
                    </Card>
                </EditData>
            </Fragment>
        )
    };
}

