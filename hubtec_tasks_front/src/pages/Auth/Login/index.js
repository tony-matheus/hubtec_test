import React, { Component } from 'react';
import PageSwitcher from '../../../components/PageSwitcher';
import AsideImg from '../../../objects/AsideImg';
import AsideForm from '../../../objects/AsideForm';
import Media from "react-media";
import '../style.css'

export default class Login extends Component{
    render() {
        return(
            <div className="Login">
                <Media
                    query="(min-width: 700px)"
                    render={() => <AsideImg active/>}
                />
                <AsideForm active>
                    <PageSwitcher/>
                </AsideForm>
            </div>
        );
    }
}
