import * as actionTypes from './actionTypes';
import axios from '../../axios-auth';

export const fetchStarted = () => ({
    type: actionTypes.FETCH_STARTED
})

export const fetchTodosSuccess = (todos) => ({
    type: actionTypes.FETCH_TODOS_SUCCESS,
    todosList: todos
});

export const fetchTodosFailure = () => ({
    type: actionTypes.FETCH_TODOS_FAILURE
});

export const fetchTodosRequest = () => {
    return dispatch => {
        dispatch(fetchStarted());
        axios.get('/todos')
            .then(response => {
                dispatch(fetchTodosSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchTodosFailure());
            });
    };
}

