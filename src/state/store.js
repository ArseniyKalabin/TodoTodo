import { combineReducers } from 'redux';
import { authReducer, todosReducer, loadingReducer, userReducer } from './ducks';

const appReducer = combineReducers({
    auth: authReducer,
    todos: todosReducer,
    loading: loadingReducer,
    user: userReducer
});

const rootReducer = (state, action) => {
    if (action.type === 'SIGN_OUT_SUCCESS') {
        state = undefined
    }

    return appReducer(state, action);
};

export default rootReducer;