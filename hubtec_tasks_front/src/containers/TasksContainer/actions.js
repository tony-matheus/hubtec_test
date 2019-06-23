import API from '../../api';
import {setHeaders, getHeaders, logoutSession, response_error, BASE_FRONT_URL} from '../../helpers/session';
import {DELETE_DONE, DELETE_IN_PROGRESS, DELETE_TO_DO, ADD_IN_PROGRESS, ADD_DONE, ADD_TO_DO } from './constants';

export function createTask(data){
    const headers = getHeaders();
    const request = API.post('/api/v1/tasks/', data, {headers: headers});
    return(dispatch) => {
        request
            .then((response) => {
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
            })
            .catch((error) => {
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
                setHeaders(response.headers);
                console.log(id);
                console.log(status);
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
                setHeaders(response.headers);

                console.warn(old_status);
                if(old_status === "") {
                    old_status = task.status
                }
                console.warn(old_status);
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

            })
            .catch((error) => {
                const message = response_error(error.response.data);
                window.Materialize.toast(message, 4000, 'red');
                setHeaders(error.response.headers);
            })
    }
}

export function logout(){
    const headers = getHeaders();

    const request = API.delete('/auth/sign_out',  {headers: headers});
    return(dispatch) => {
        request
            .then((response)=>{
                logoutSession();
                window.location.replace(BASE_FRONT_URL+"/auth/sign-in")
            })
            .catch((error) => {
                window.Materialize.toast('User or password incorrect', 4000, 'red');
                console.log(error)
            })
    }
}
