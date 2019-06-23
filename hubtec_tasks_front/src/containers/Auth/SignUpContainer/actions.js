import API from '../../../api';
import {setHeaders } from '../../../helpers/session';

export function signUp({name, email, password, password_confirmation}) {
    console.log(name, email, password, password_confirmation);

    const request = API.post('/auth', {name, email, password, password_confirmation});

    return(dispatch) =>{
        request
            .then((response)=>{
                setHeaders(response.headers);
                window.Materialize.toast('Register Successful', 4000, 'green');
                window.location.replace("http://localhost:3001/dashboard/tasks");
                // dispatch(push('/dashboard'))

            })
            .catch((error) => {
                window.Materialize.toast('User or password incorrect', 4000, 'red');
                console.log(error)
                // dispatch(push('/dashboard'))
            })
    }
}
