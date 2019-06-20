import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { LocalForm } from 'react-redux-form';
// import { LocalForm } from 'redux-form';
import {
    FormCenter,
    FormField,
    FormFieldButton,
    FormFieldInput,
    FormFieldLabel,
    FormFields,
    FormButtonField,
    FormLogin
} from '../../objects/FormField';
import './style.css'

export default class SignInForm extends Component {

    constructor(){
        super();
        this.state = {
            email: "",
            password: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
        // event.preventDefault();
        console.log(this.state);
        this.props.handleSubmit(this.state);
    };

    render() {
        return (
            <FormCenter>
                <LocalForm  className="FormFields" onSubmit={this.handleSubmit}>
                    <FormLogin>
                        <FormField>
                            <FormFieldLabel white  htmlFor="email">E-Mail Address</FormFieldLabel>
                            <FormFieldInput
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </FormField>

                        <FormField>
                            <FormFieldLabel white  htmlFor="password">Password</FormFieldLabel>
                            <FormFieldInput
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                name="password"
                                value={this.state.password}
                                onChange={ this.handleChange}
                            />
                        </FormField>
                    </FormLogin>
                    <FormField>
                        <FormFieldButton primary type="submit" >Sign In</FormFieldButton>
                        <Link to="/Login" className="FormField__Link">Create an account</Link>
                    </FormField>
                </LocalForm>
            </FormCenter>
        );
    }
}
