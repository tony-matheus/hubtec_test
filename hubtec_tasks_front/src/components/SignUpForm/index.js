import React, { Component } from 'react';
import { FormCenter, FormField, FormFields, FormFieldLabel, FormFieldInput, FormFieldButton} from '../../objects/FormField';



export default class SignUpForm extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            password_confirmation: '',
            name: '',
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
        event.preventDefault();
        console.log(this.state);
        this.props.handleSubmit(this.state);
    };

    render() {
        return(
            <FormCenter>
                <FormFields onSubmit={this.handleSubmit}>
                    <FormField>
                        <FormFieldLabel htmlFor="name"> Full Name </FormFieldLabel>
                        <FormFieldInput
                            type="text"
                            id="name"
                            placeholder="Enter your full name"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}/>
                    </FormField>

                    <FormField>
                        <FormFieldLabel htmlFor="email"> Email </FormFieldLabel>
                        <FormFieldInput
                            type="email"
                            id="email"
                            placeholder="Enter your full name"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}/>
                    </FormField>

                    <FormField>
                        <FormFieldLabel htmlFor="password"> Password </FormFieldLabel>
                        <FormFieldInput
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}/>
                    </FormField>

                    <FormField>
                        <FormFieldLabel htmlFor="password_confirmation"> Password Confirmation </FormFieldLabel>
                        <FormFieldInput
                            type="password"
                            id="password_confirmation"
                            placeholder="Enter your password"
                            name="password_confirmation"
                            value={this.state.password_confirmation}
                            onChange={this.handleChange}/>
                    </FormField>
                    <FormField>
                        <FormFieldButton >Sign Up</FormFieldButton>
                    </FormField>
                </FormFields>
            </FormCenter>
        )
    }
}
