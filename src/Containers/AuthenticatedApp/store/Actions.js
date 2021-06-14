import * as ActionTypes from './ActionTypes';
import Axios from 'axios';
import { notification } from '../../utils';

export const setLoading = (payload) => ({
    type: ActionTypes.APP_LOADING,
    payload
})
export const setAuth = (payload) => ({
    type: ActionTypes.SET_AUTH,
    payload
})
export const setUser = (payload) => ({
    type: ActionTypes.SET_USER,
    payload
})

export const getUsersSuccess = (payload) => ({
    type: ActionTypes.GET_USERS_SUCCESS,
    payload

});

export const  getUsersError = (payload) => ({
    type: ActionTypes.GET_USERS_ERROR,
    payload

});
export const  getUsers = () => {
    return dispatch => {
        dispatch(setLoading(true));
        Axios.get(`${process.env.REACT_APP_API_URL}get_user_list`)
            .then(res => {
                dispatch(setLoading(false));
                if (res && res.data && res.data.status ) {
                    dispatch(getUsersSuccess(res.data.data));
                } else {
                    notification('error', 'Ooops Something went wrong')
                   dispatch(getUsersError(res.data));
                }
            })
            .catch(e => {
                
                notification('error', 'Ooops Something went wrong')
                dispatch(getUsersError(e));

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