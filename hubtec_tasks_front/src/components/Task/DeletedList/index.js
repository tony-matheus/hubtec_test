import React, {Component, Fragment} from 'react';
import TaskUnit from "../TaskUnit";
import Title from '../../../objects/Title';
import ColumnList from '../../../objects/ColumnList';
import {Scroll, ContainerInline} from '../../../objects/View'

class DeletedTaskList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let deleted = this.props.deleted.length ? (this.props.deleted) : [];
        return (
            <Fragment>
                <Scroll center>
                    <ContainerInline>
                        <div style={{padding: 14+"px", margin: "auto"}}>
                            <ColumnList style={{maxWidth: "600px", width: 580+"px"}}>
                                <Title>Deleted Tasks </Title>
                                {deleted.map((deleted, index) =>
                                    <TaskUnit
                                        true_delete_task={this.props.true_delete_task}
                                        recycle_task={this.props.recycle_task}
                                        {...deleted}
                                        key={index}/>
                                )}
                            </ColumnList>
                        </div>
                    </ContainerInline>
                </Scroll>
            </Fragment>
        );
    }
}

export default DeletedTaskList;
