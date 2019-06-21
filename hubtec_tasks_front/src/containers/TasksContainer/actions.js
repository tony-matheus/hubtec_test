import API from '../../api';
import {setHeaders, getHeaders, logoutSession, response_error } from '../../helpers/session';
import {DELETE_DONE, DELETE_IN_PROGRESS, DELETE_TO_DO, ADD_IN_PROGRESS, ADD_DONE, ADD_TO_DO } from './constants';

export function createTask(data){
    console.log(data);
    const task = {
        task: data
    };

    const headers = getHeaders();
    const request = API.post('/api/v1/tasks/', data, {headers: headers});
    return(dispatch) => {
        request
            .then((response) => {
                console.log(response.data.status);
                setHeaders(response.headers);
                switch (response.data.status) {
                    case "to_do":
                        dispatch({ type: ADD_TO_DO, payload: response.data });
                        break;
                    case "in_progress":
                        dispatch({ type: ADD_IN_PROGRESS, payload: response.data });
                        break;
                    case "done":
                        dispatch({ type: ADD_DONE, payload: response.data });
                        break;
                }
                // dispatch({ type: ADD_TASK, payload: response.data })
            })
            .catch((error) => {
                console.log(error.response);
                const message = response_error(error.response.data);
                window.Materialize.toast(message, 4000, 'red');
                setHeaders(error.response.headers);
            })
    }
}

export function deleteTask({id, status}){

    const headers = getHeaders();
    const request = API.delete('/api/v1/tasks/'+id, {headers: headers});
    return(dispatch) => {
        request
            .then((response) => {
                console.log(response.data.status);
                setHeaders(response.headers);
                switch (status) {
                    case "to_do":
                        dispatch({ type: DELETE_TO_DO, payload: id });
                        break;
                    case "in_progress":
                        dispatch({ type: DELETE_IN_PROGRESS, payload: id });
                        break;
                    case "done":
                        dispatch({ type: DELETE_DONE, payload: id });
                        break;
                }
                // dispatch({ type: DELETE_TASK, payload: response.data })
            })
            .catch((error) => {
                window.Materialize.toast('User or password incorrect', 4000, 'red');
                setHeaders(error.headers);
            })
    }
}

export function update_task_status({id, task}, old_status = ""){
    const headers = getHeaders();
    const request = API.put('/api/v1/tasks/'+id, task, {headers: headers});
    return(dispatch) => {
        request
            .then((response) => {
                console.log(response.data.status);
                setHeaders(response.headers);
                if(old_status == "") {
                    old_status = task.status
                }
                switch (old_status) {
                    case "to_do":
                        dispatch({ type: DELETE_TO_DO, payload: id });
                        break;
                    case "in_progress":
                        dispatch({ type: DELETE_IN_PROGRESS, payload: id });
                        break;
                    case "done":
                        dispatch({ type: DELETE_DONE, payload: id });
                        break;
                }
                switch (response.data.status) {
                    case "to_do":
                        dispatch({ type: ADD_TO_DO, payload: response.data });
                        break;
                    case "in_progress":
                        dispatch({ type: ADD_IN_PROGRESS, payload: response.data });
                        break;
                    case "done":
                        dispatch({ type: ADD_DONE, payload: response.data });
                        break;
                }

                // dispatch({ type: ADD_TASK, payload: response.data })
            })
            .catch((error) => {
                console.log(error.response);
                const message = response_error(error.response.data);
                window.Materialize.toast(message, 4000, 'red');
                setHeaders(error.response.headers);
            })
    }
}
