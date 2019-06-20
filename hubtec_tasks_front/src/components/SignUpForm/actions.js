import axios from 'axios/index';
import API from '../../api';

export function register(name, email, password, password_confirmation) {

    if (!checkPassword(password, password_confirmation)) {
        window.Materialize.toast('Password and Password confirmation ', 4000, 'red');
        return;
    }
    const params =  { name, email, password, password_confirmation };
    const request = API.post("/auth", params);

    return(dispatch) => {
        request.then(
            resp => {
                console.log(resp);
                // window.Materialize.toast('Success ', 4000, 'green');
            },
            error => {
                // window.Materialize.toast('Password and Password confirmation ', 4000, 'red');
            }
        )
    };
}

function checkPassword(password, password_confirmation) {
    return password === password_confirmation
}
