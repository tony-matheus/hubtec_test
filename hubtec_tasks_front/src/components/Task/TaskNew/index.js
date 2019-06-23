import React, {Component, Fragment} from 'react';
import {Row, Col, TextInput} from 'react-materialize';
import {CardForm}from '../../../objects/FormField'
import {
    FormFields,
    FormFieldButton,
    FixedButton
} from "../../../objects/FormField";

import Title from '../../../objects/Title';
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
export default class TaskNew extends Component {
    constructor() {
        super();
        this.state = {
            task: {
                name: '',
                description: '',
                end_time: ''
            },
            hide: true
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {
        const task = {...this.state.task};
        let target = event.target;
        task[target.name] = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({task})
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.handleSubmit(this.state.task);
        this.setState({hide: !this.state.hide})
        this.clearForm();
    };

    clearForm = event => {
      const task = {
          name: '',
          description: '',
          end_time: ''
      };
      this.setState({task})
    };

    showAdd = event => {
        event.preventDefault();
        this.setState({hide: !this.state.hide})
    }

    render() {
        return (
            <Fragment>
                <FixedButton top={600} right={10} onClick={this.showAdd}>
                    <span>ADD Task</span>
                    <FontAwesomeIcon
                        style={{cursor: "pointer", "margin-left": 10+"px"}}
                        icon={faPlusCircle}
                        size={"1x"}
                        color={"rgba(48,239,52,0.81)"}
                        title="Deleted Tasks"
                    />
                </FixedButton>
                <CardForm hide={this.state.hide}>
                    <Title> Add Task </Title>
                    <FormFields onSubmit={this.handleSubmit}>
                        <Row>
                            <Col s={12}>
                                <TextInput
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={this.state.task.name}
                                    onChange={this.handleChange}
                                    s={12}
                                    maxLength="200"
                                    label="Task Name"
                                    required>
                                </TextInput>
                                <TextInput
                                    type="text"
                                    id="description"
                                    name="description"
                                    value={this.state.task.description}
                                    onChange={this.handleChange}
                                    s={12}
                                    maxLength="200"
                                    label="Task Description"
                                    required
                                >
                                </TextInput>
                                <TextInput
                                    type="date"
                                    id="end_time"
                                    name="end_time"
                                    value={this.state.task.end_time}
                                    onChange={this.handleChange}
                                    s={12}
                                    maxLength="200"
                                    required
                                    // label="Task End Time"
                                >
                                </TextInput>
                                <div style={{float: "left"}}>
                                    <FormFieldButton onClick={this.showAdd}>Close</FormFieldButton>
                                </div>
                                <div style={{float: "right"}}>
                                    <FormFieldButton primary type="submit">Salvar</FormFieldButton>
                                </div>
                            </Col>
                        </Row>
                    </FormFields>
                </CardForm>
            </Fragment>
        )
    }
}
