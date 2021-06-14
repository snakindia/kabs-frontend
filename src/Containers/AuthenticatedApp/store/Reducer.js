import * as ActionTypes from './ActionTypes';
const initialState = {
    loading: false,
    authenticated: false,
    user: undefined,
    users: []
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.APP_LOADING:
            return { ...state, loading: payload }
        case ActionTypes.SET_AUTH:
            return {
                ...state,
                authenticated: payload,
            }

        case ActionTypes.GET_USERS_SUCCESS:
            return {
                ...state,
                users: payload,
                error: undefined
            }

        case ActionTypes.GET_USERS_ERROR:
            return {
                ...state,
                users: [],
                error: payload
            }

        case ActionTypes.SET_USER:
            return {
                ...state,
                user: payload,
            }

        default:
            return state;
    }
}
export default reducer;
