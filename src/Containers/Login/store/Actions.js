import Axios from 'axios';
import { notification } from '../../utils';
import {setUser, setAuth,setLoading} from '../../AuthenticatedApp/store/Actions'
export const doLogin = (payload) => {
    return dispatch => {
        dispatch(setLoading(true));
        Axios.post(`${process.env.REACT_APP_API_URL}login`, payload
        )
            .then(res => {
                dispatch(setLoading(false));
                if (res.status == 200 && res.data && res.data.data && res.data.data[0]) {
                    const datum =res.data.data[0];
                    
                    localStorage.setItem('kabsAuth', JSON.stringify(datum));
                    dispatch(setAuth(true));
                    dispatch(setUser(datum));
                } else {
                    notification('error',  'Unable to process your request')
                }
            })
            .catch(e => {
                notification('error',  'something went wrong')
                dispatch(setLoading(false));

            });
    }
}

export const doLogout = () => {
    return dispatch => {
        localStorage.clear()
        dispatch(setAuth(false));
        dispatch(setUser(undefined));
    }
}