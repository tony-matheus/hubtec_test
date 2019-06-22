import React, {Component, Fragment} from 'react';
import {Row, Col, Card, Icon, Textarea, TextInput} from 'react-materialize';
import {FormFieldButton, ListFields} from '../../../objects/FormField';
import InvisibleButton from '../../../objects/InvisibleButton'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEraser, faArrowRight, faArrowLeft, faPencilAlt, faTrashRestoreAlt} from '@fortawesome/free-solid-svg-icons'
import {ViewData, EditData, BreakText} from "../../../objects/View";
import Options from '../../../objects/Options';

export default class TaskUnit extends Component {
    constructor(props){
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
        this.update_task_status_in_progress = this.update_task_status_in_progress.bind();
        this.update_task_status_done = this.update_task_status_done.bind();
    }

    delete_task = event => {
        this.props.delete_task({id: this.props.id, status: this.props.status});
    };

    update_task_status_to_do = event => {
        this.props.update_task_status({id: this.props.id, task: {status: "to_do"}}, this.props.status);
    };

    update_task_status_in_progress = event => {
        // alert("in_progress");
        this.props.update_task_status({id: this.props.id, task: {status: "in_progress"}}, this.props.status);
    };

    update_task_status_done = event => {
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
        event.preventDefault()
        console.log("saudhasudh")
        if(this.props.status == "to_do"){
            console.log("saudhasudh")
            this.setState({hide: !this.state.hide, task: this.props})
        }
    };

    handleChange = event => {
        const task = {...this.state.task};
        let target = event.target;
        task[target.name] = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({task})
    };

    recycle_task = event => {
        this.props.recycle_task({id: this.props.id})
    };

    true_delete_task = event => {
        this.props.true_delete_task({id: this.props.id})
    }

    render() {
        return (
            <Fragment>
                <ViewData hide={this.state.hide}>
                    <Card>
                        <Row>
                            <Col s={6}>
                                <BreakText onDoubleClick={this.showEdit}><b>{this.props.name}</b></BreakText>
                            </Col>
                            <Col s={4}>
                                <ListFields>
                                    <div onDoubleClick={this.showEdit}>End Date: <b>{this.props.end_time}</b></div>
                                    <div>Status: <b>{this.props.status}</b></div>
                                </ListFields>
                            </Col>
                            <Col s={2} m={2}>
                                <Options hide={ !this.props.update_task_status}>
                                    <InvisibleButton
                                        hide={this.props.status === "done" }
                                        onClick={this.showEdit}>
                                        <FontAwesomeIcon
                                            style={"cursor: pointer"}
                                            icon={faPencilAlt}
                                            size={"1x"}
                                            onClick={this.showEdit}
                                            color={"rgba(0,0,0,0.81)"}
                                        />
                                    </InvisibleButton>
                                    <InvisibleButton
                                        hide={this.props.status !== "in_progress"}
                                        onClick={(this.props.status === "in_progress") ? this.update_task_status_to_do : this.update_task_status_done }>
                                        <FontAwesomeIcon
                                            style={"cursor: pointer"}
                                            icon={faArrowLeft}
                                            size={"1x"}
                                            onClick={(this.props.status === "in_progress") ? this.update_task_status_to_do : this.update_task_status_done }
                                            color={"rgba(133,239,100,0.81)"}
                                        />
                                    </InvisibleButton>
                                    <InvisibleButton
                                        hide={this.props.status === "done"}
                                        onClick={(this.props.status === "to_do") ? this.update_task_status_in_progress : this.update_task_status_done }>
                                        <FontAwesomeIcon
                                            style={"cursor: pointer"}
                                            icon={faArrowRight}
                                            size={"1x"}
                                            onClick={(this.props.status === "to_do") ? this.update_task_status_in_progress : this.update_task_status_done }
                                            color={"rgba(133,239,100,0.81)"}
                                        />
                                    </InvisibleButton>
                                    <InvisibleButton onClick={this.delete_task}>
                                        <FontAwesomeIcon
                                            style={"cursor: pointer"}
                                            icon={faEraser}
                                            size={"1x"}
                                            onClick={this.delete_task}
                                            color={"#ef2626cf"}

                                        />
                                    </InvisibleButton>
                                </Options>
                                <Options hide={this.props.update_task_status}>
                                    <InvisibleButton
                                        big
                                        onClick={this.recycle_task}>
                                        <FontAwesomeIcon
                                            style={"cursor: pointer"}
                                            icon={faTrashRestoreAlt}
                                            size={"2x"}
                                            onClick={this.recycle_task}
                                            color={"rgba(27,239,43,0.81)"}
                                        />
                                    </InvisibleButton>
                                    <InvisibleButton
                                        big
                                        onClick={this.true_delete_task}>
                                        <FontAwesomeIcon
                                            style={"cursor: pointer"}
                                            icon={faEraser}
                                            size={"2x"}
                                            onClick={this.true_delete_task}
                                            color={"#ef2626cf"}
                                        />
                                    </InvisibleButton>
                                </Options>
                            </Col>
                        </Row>
                        <Row>
                            <Col s={12}>
                                <BreakText onDoubleClick={this.showEdit}><span></span><b>{this.props.description}</b></BreakText>
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
                            </Row>
                            <Row>
                                <Col s={12}>
                                    <div>
                                        <Textarea
                                            id="description"
                                            name="description"
                                            s={12} m={10} l={11} xl={12}
                                            value={this.state.task.description}
                                            onChange={this.handleChange}
                                            maxLength="500"
                                            label="Task Description"
                                            required/>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <div style={{float: "left"}}>
                                    <FormFieldButton small onClick={this.showEdit}>Close</FormFieldButton>
                                </div>
                                <div style={{float: "right"}}>
                                    <FormFieldButton primary small type="submit">Salvar</FormFieldButton>
                                </div>
                            </Row>
                        </form>
                    </Card>
                </EditData>
            </Fragment>
        )
    };
}

