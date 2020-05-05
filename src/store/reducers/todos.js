import * as actionTypes from '../actions/actionTypes';

const initialState = {
    todosList: [],
    loading: false
}

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_STARTED:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_TODOS_SUCCESS:
            return {
                ...state,
                todosList: [...action.todosList],
                loading: false
            }
        case actionTypes.FETCH_TODOS_FAILURE:
            return {
                ...state,
                todosList: [],
                loading: false
            }
        default: return state;
    }
}

export default todosReducer;