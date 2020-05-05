import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isLogged: false,
    user: {
        name: '',
        role: ''
    },
    loading: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.REQUEST_STARTED:
            return {
                ...state,
                loading: true
            }
        case actionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                isLogged: true,
                user: {
                    ...state.user,
                    name: action.user.name,
                    role: action.user.role
                },
                loading: false
            }
        case actionTypes.SIGN_IN_FAILURE:
            return {
                ...state,
                isLogged: false,
                user: {
                    ...state.user,
                    name: '',
                    role: ''
                },
                loading: false
            }
        case actionTypes.SIGN_OUT_SUCCESS:
            return initialState;
        case actionTypes.SIGN_OUT_FAILURE:
            return initialState;
        default: return state;
    }
}

export default authReducer;