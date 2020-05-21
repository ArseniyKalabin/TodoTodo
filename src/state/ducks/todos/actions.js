import * as types from './types';

export const fetchTodosRequest = () => ({
    type: types.FETCH_TODOS_REQUEST
});

export const fetchTodosSuccess = (todos) => ({
    type: types.FETCH_TODOS_SUCCESS,
    todosList: todos
});

export const fetchTodosFailure = () => ({
    type: types.FETCH_TODOS_FAILURE
});

export const addTodosRequest = () => ({
    type: types.ADD_TODOS_REQUEST
});

export const addTodosSuccess = (todo) => ({
    type: types.ADD_TODOS_SUCCESS,
    todo: todo
});

export const addTodosFailure = () => ({
    type: types.ADD_TODOS_FAILURE
});

export const deleteTodosRequest = () => ({
    type: types.DELETE_TODOS_REQUEST
});

export const deleteTodosSuccess = (id) => ({
    type: types.DELETE_TODOS_SUCCESS,
    id: id
});

export const deleteTodosFailure = () => ({
    type: types.DELETE_TODOS_FAILURE
});

export const updateTodosRequest = () => ({
    type: types.UPDATE_TODOS_REQUEST
});

export const updateTodosSuccess = (id, data) => ({
    type: types.UPDATE_TODOS_SUCCESS,
    id: id,
    data: data
});

export const updateTodosFailure = () => ({
    type: types.UPDATE_TODOS_FAILURE
});

