import API from '../../api';
import {setHeaders, getHeaders } from '../../helpers/session';
import {FETCH_DELETED} from '../DeletedTasksContainer/constants'
export function getDeletedTasks()
{
    const headers = getHeaders();
    const request = API.get('/api/v1/tasks/destroyed', { headers: headers});

    return (dispatch) => {
        request.then(
            (resp) => {
                console.log(headers);
                setHeaders(resp.headers);
                console.log(resp.data);
                dispatch({ type: FETCH_DELETED, payload: resp.data })
                // window.Materialize.toast('WORKS', 4000, 'green')
            },
            error => window.Materialize.toast('Problem in get Timeline', 4000, 'red')
        )
    };
}
