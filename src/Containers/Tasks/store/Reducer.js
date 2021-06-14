import * as ActionTypes from './ActionTypes';
const initialState = {
    loading: false,
    error: undefined,
    data: [],
    task: undefined,
    addTaskKey: new Date()
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_TASKS_LOADING:
            return { ...state, loading: payload }
        case ActionTypes.ADD_TASK_SUCCESS:
            return { ...state, addTaskKey: payload }
        case ActionTypes.GET_TASKS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: undefined,
                data: payload,
            }

        case ActionTypes.GET_TASKS_ERROR:
            return {
                ...state,
                loading: false,
                error: payload,
            }

        case ActionTypes.GET_TASK_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                error: undefined,
                task: payload,
                addTaskKey:new Date()
            }

        case ActionTypes.GET_TASK_DETAIL_ERROR:
            return {
                ...state,
                loading: false,
                error: payload,
                task: undefined,
            }

        default:
            return state;
    }
}
export default reducer;
