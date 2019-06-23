import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {recycle_task, true_delete_task} from "./actions";
import {logout} from "../Auth/actions";
import {Row} from 'react-materialize';
import DeletedList from "../../components/Task/DeletedList";
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import {FixedButton} from "../../objects/FormField";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class DeletedTasksContainer extends React.Component{
    constructor(){
        super();
        this.recycle_task = this.recycle_task.bind(this);
        this.true_delete_task = this.true_delete_task.bind(this);
        this.logout = this.logout.bind(this);
    };

    logout = event =>
    {
        this.props.logout()
    };

    recycle_task(task){
        this.props.recycle_task(task);
    }

    true_delete_task(data){
        this.props.true_delete_task(data);
    }

    render() {
        let deleted = this.props.deleted.length ? this.props.deleted : [];
        return(
            <Fragment>
                <FixedButton onClick={this.logout} top={700} right={10} style={{cursor: "pointer", "background-color" : "red"}}>
                    <span>Logout</span>
                    <FontAwesomeIcon
                        style={{cursor: "pointer", "margin-left": 10+"px"}}
                        icon={faSignOutAlt}
                        size={"1x"}
                        color={"rgba(48,239,52,0.81)"}
                        title="Logout"
                    />
                </FixedButton>
                <Row>
                    <DeletedList
                        true_delete_task={this.true_delete_task}
                        recycle_task={this.recycle_task}
                        deleted={deleted}/>
                </Row>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        deleted: state.deleted
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({recycle_task, true_delete_task, logout }, dispatch)
}

export default connect(mapStateToProps , mapDispatchToProps)(DeletedTasksContainer)

