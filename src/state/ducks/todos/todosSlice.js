import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos, addTodo, deleteTodo, updateTodo } from './operations';


const initialState = {
    todosList: [],
    filter: null
}

const todosSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        setFilter: (state, action) => {
            const filter = action.payload;
            state.filter = filter;
        }
    },
    extraReducers: {
        [fetchTodos.fulfilled]: (state, action) => {
            const todos = action.payload;
            state.todosList = todos;
        },
        [addTodo.fulfilled]: (state, action) => {
            const todo = action.payload;
            state.todosList.unshift(todo);
        },
        [deleteTodo.fulfilled]: (state, action) => {
            const deletedId = action.payload.id;
            const deletedIndex = state.todosList.findIndex(todo => todo.id === deletedId);
            state.todosList.splice(deletedIndex, 1);
        },
        [updateTodo.fulfilled]: (state, action) => {
            const { updatedId, updatedData } = action.payload;
            const updatedIndex = state.todosList.findIndex(todo => todo.id === updatedId);
            state.todosList[updatedIndex].title = updatedData.title;
            state.todosList[updatedIndex].description = updatedData.description;
        },

    }
});

const { actions, reducer } = todosSlice;

export const { setFilter } = actions;

export default reducer;