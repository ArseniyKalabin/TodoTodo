import { combineReducers } from 'redux';
import authReducer from './authentication';
import todosReduser from './todos';

const appReducer = combineReducers({
    auth: authReducer,
    todos: todosReduser
});

const rootReducer = (state, action) => {
    if (action.type === 'SIGN_OUT_SUCCESS') {
        state = undefined
    }

    return appReducer(state, action);
};

export default rootReducer;