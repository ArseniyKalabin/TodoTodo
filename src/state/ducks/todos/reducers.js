import * as types from './types';

const initialState = {
    todosList: []
}

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_TODOS_SUCCESS:
            return {
                ...state,
                todosList: [...action.todosList]
            };
        case types.FETCH_TODOS_FAILURE:
            return initialState;
        case types.ADD_TODOS_SUCCESS:
            return {
                ...state,
                todosList: [action.todo, ...state.todosList]
            };
        case types.ADD_TODOS_FAILURE:
            return state;
        case types.DELETE_TODOS_SUCCESS:
            return {
                ...state,
                todosList:
                    [...state.todosList]
                        .filter(
                            todo => todo.id !== action.id
                        )
            }
        case types.DELETE_TODOS_FAILURE:
            return state;
        case types.UPDATE_TODOS_SUCCESS:
            return {
                ...state,
                todosList:
                    [...state.todosList]
                        .map(todo =>
                            (
                                (todo.id === action.id) ?
                                    {
                                        ...todo,
                                        title: action.data.title,
                                        description: action.data.description
                                    }
                                    : todo
                            )
                        )
            }
        case types.UPDATE_TODOS_FAILURE:
            return state;
        default: return state;
    }
}

export default todosReducer;