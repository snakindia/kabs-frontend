import * as ActionTypes from './ActionTypes';
import Axios from 'axios';
import { notification } from '../../utils';
export const setLoading = (payload) => ({
    type: ActionTypes.SET_TASKS_LOADING,
    payload
})

export const getTasksSuccess = (payload) => ({
    type: ActionTypes.GET_TASKS_SUCCESS,
    payload

});

export const  getTasksError = (payload) => ({
    type: ActionTypes.GET_TASKS_ERROR,
    payload

});
export const  getTasks = () => {
    return dispatch => {
        dispatch(setLoading(true));
        Axios.get(`${process.env.REACT_APP_API_URL}get_task_list`)
            .then(res => {
                dispatch(setLoading(false));
                if (res && res.data && res.data.status ) {
                    dispatch(getTasksSuccess(res.data.data));
                } else {
                    notification('error', 'Ooops Something went wrong')
                   dispatch(getTasksError(res.data));
                }
            })
            .catch(e => {
                
                notification('error', 'Ooops Something went wrong')
                dispatch(getTasksError(e));

            });
    }
}

export const getTaskDetailSuccess = (payload) => ({
    type: ActionTypes.GET_TASK_DETAIL_SUCCESS,
    payload

});

export const  getTaskDetailError = (payload) => ({
    type: ActionTypes.GET_TASK_DETAIL_ERROR,
    payload

});
export const  getTaskDetail = (id) => {
    return dispatch => {
        dispatch(setLoading(true));
        Axios.get(`${process.env.REACT_APP_API_URL}get_task_details?id=${id}`)
            .then(res => {
                dispatch(setLoading(false));
                if (res && res.data && res.data.status && res.data.data && res.data.data[0] ) {
                    dispatch(getTaskDetailSuccess(res.data.data[0]));
                } else {
                    notification('error', 'Ooops Something went wrong')
                   dispatch(getTaskDetailError(res.data));
                }
            })
            .catch(e => {
                
                notification('error', 'Ooops Something went wrong')
                dispatch(getTaskDetailError(e));

            });
    }
}
export const  addTaskSuccess = (payload) => ({
    type: ActionTypes.ADD_TASK_SUCCESS,
    payload

});
export const  addTask = (payload) => {
    return dispatch => {
        dispatch(setLoading(true));
        Axios.post(`${process.env.REACT_APP_API_URL}save_task`,payload)
            .then(res => {
                dispatch(setLoading(false));
                if (res && res.data && res.data.status  ) {
                    notification('success', 'Task added successfully')
                    dispatch(addTaskSuccess(new Date()))
                } else if(res && res.data && res.data.error) {
                    let errors =Object.values(res.data.error);
                    if(errors && errors[0] && errors[0].message){
                        notification('error', errors[0].message)
                    } else {
                         notification('error', 'Ooops Something went wrong')
                    }
                    
                   
                } else {
                     notification('error', 'Ooops Something went wrong')
                }
            })
            .catch(e => {
                
                notification('error', 'Ooops Something went wrong')
            });
    }
}
export const  updateTask = (payload) => {
    return dispatch => {
        dispatch(setLoading(true));
        Axios.post(`${process.env.REACT_APP_API_URL}update_task`,payload)
            .then(res => {
                dispatch(setLoading(false));
                if (res && res.data && res.data.status  ) {
                    notification('success', 'Task updated successfully')
                    dispatch(addTaskSuccess(new Date()))
                } else if(res && res.data && res.data.error) {
                    let errors =Object.values(res.data.error);
                    if(errors && errors[0] && errors[0].message){
                        notification('error', errors[0].message)
                    } else {
                         notification('error', 'Ooops Something went wrong')
                    }
                    
                   
                } else {
                     notification('error', 'Ooops Something went wrong')
                }
            })
            .catch(e => {
                
                notification('error', 'Ooops Something went wrong')
               

            });
    }
}