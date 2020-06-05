import { createSelector } from '@reduxjs/toolkit';

export const getTodosList = state => state.todos.todosList;

export const getTodosFilter = state => state.todos.filter;

export const getTodosByUser = createSelector(
    [getTodosList, getTodosFilter],
    (todos, filter) => {
        if (filter) {
            return todos.filter(todo => todo.createdBy === filter);
        }
        return todos;
    }
);
