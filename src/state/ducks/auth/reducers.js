import * as types from './types';

const initialState = {
    isAuthenticated: false,
    user: {
        name: '',
        role: ''
    }
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SIGN_IN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: {
                    ...state.user,
                    name: action.user.name,
                    role: action.user.role
                }
            }
        case types.SIGN_IN_FAILURE:
            return initialState
        case types.SIGN_OUT_SUCCESS:
            return initialState;
        case types.SIGN_OUT_FAILURE:
            return state;
        default: return state;
    }
}

export default authReducer;