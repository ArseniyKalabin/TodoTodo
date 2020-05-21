import axios from '../../../utils/axios-instance';
import * as actions from './actions';

export const fetchTodos = () => {
    return dispatch => {
        dispatch(actions.fetchTodosRequest());
        axios.get('/todos')
            .then(response => {
                dispatch(actions.fetchTodosSuccess(response.data));
            })
            .catch(error => {
                dispatch(actions.fetchTodosFailure());
            });
    };
}

export const addTodo = (todo, resetForm) => {
    return dispatch => {
        dispatch(actions.addTodosRequest());
        axios.post('/todos', todo)
            .then(response => {
                dispatch(actions.addTodosSuccess(response.data));
                resetForm();
            })
            .catch(error => {
                dispatch(actions.addTodosFailure());
            });
    };
}

export const deleteTodo = (id) => {
    return dispatch => {
        dispatch(actions.deleteTodosRequest());
        axios.delete(`/todos/${id}`)
            .then(response => {
                dispatch(actions.deleteTodosSuccess(id));
            })
            .catch(error => {
                dispatch(actions.deleteTodosFailure());
            });
    };
}

export const updateTodo = (id, data) => {
    return dispatch => {
        dispatch(actions.updateTodosRequest());
        axios.put(`/todos/${id}`, data)
            .then(response => {
                dispatch(actions.updateTodosSuccess(id, data));
            })
            .catch(error => {
                dispatch(actions.updateTodosFailure());
            });
    };
}