import * as types from './types';

const initialState = {
    userList: []
}

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_USERLIST_SUCCESS:
            return {
                ...state,
                userList: [...action.userList]
            };
        case types.FETCH_USERLIST_FAILURE:
            return initialState;
        default: return state;
    }
}

export default todosReducer;