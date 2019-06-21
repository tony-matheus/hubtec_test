import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignUpForm from '../../../components/SignUpForm';
import {signUp} from "./actions";

class SignUpContainer extends React.Component {
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(form)
    {
        this.props.signUp(form);
    }

    render() {
        return <SignUpForm handleSubmit={this.handleSubmit} />
    }
}
function mapStateToProps(state) {
    return { }
};

function mapDispatchToProps(dispatch){
    return bindActionCreators({signUp}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
