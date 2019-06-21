import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignInForm from '../../../components/SignInForm';
import {signIn} from "./actions";

class SignInContainer extends React.Component{
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(form){
        this.props.signIn(form);
    }

    render() {
        return <SignInForm handleSubmit={this.handleSubmit}/>
    }
}

function mapStateToProps(state) {
    return { }
};

function mapDispatchToProps(dispatch){
    return bindActionCreators({signIn}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
