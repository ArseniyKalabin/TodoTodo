import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../utils/axios-instance';


export const fetchTodos = createAsyncThunk(
    'todos/fetchTodosStatus',
    async () => {
        const response = await axios.get('/todos');
        return response.data.reverse();
    }
);

export const addTodo = createAsyncThunk(
    'todos/addTodoStatus',
    async (todo) => {
        const response = await axios.post('/todos', todo);
        return response.data;
    }
);

export const deleteTodo = createAsyncThunk(
    'todos/deleteTodoStatus',
    async (id) => {
        console.log(id);
        const response = await axios.delete(`/todos/${id}`);
        return { id: id };
    }
);

export const updateTodo = createAsyncThunk(
    'todos/updateTodoStatus',
    async (updatedTodo) => {
        console.log(updatedTodo);
        const { updatedId, updatedData } = updatedTodo;
        const response = await axios.put(`/todos/${updatedId}`, updatedData);
        return updatedTodo;
    }
);