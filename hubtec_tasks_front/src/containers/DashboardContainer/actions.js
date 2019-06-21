import API from '../../api';
import {setHeaders, getHeaders } from '../../helpers/session';
import { FETCH_DONES, FETCH_IN_PROGRESS, FETCH_TO_DOS} from "../TasksContainer/constants";

export function getTasks()
{
    const headers = getHeaders();
    const request = API.get('/api/v1/tasks', { headers: headers});

    return (dispatch) => {
        request.then(
            (resp) => {
                console.log(headers);
                setHeaders(resp.headers);
                console.log(resp.data);
                dispatch({ type: FETCH_DONES, payload: resp.data.done })
                dispatch({ type: FETCH_IN_PROGRESS, payload: resp.data.in_progress })
                dispatch({ type: FETCH_TO_DOS, payload: resp.data.to_do })
                window.Materialize.toast('WORKS', 4000, 'green')
            },
            error => window.Materialize.toast('Problem in get Timeline', 4000, 'red')
        )
    };
}
