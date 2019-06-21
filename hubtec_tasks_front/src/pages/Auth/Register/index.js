import React, { Component } from 'react';
import PageSwitcher from '../../../components/PageSwitcher';
import AsideImg from '../../../objects/AsideImg';
import AsideForm from '../../../objects/AsideForm';
import '../style.css'

export default class Register extends Component{
    render() {
        return(
            <div className="Login">
                <AsideImg />
                <AsideForm>
                    <PageSwitcher/>
                </AsideForm>
            </div>
        );
    }
}
