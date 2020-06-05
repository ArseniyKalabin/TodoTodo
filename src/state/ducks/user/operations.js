import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../utils/axios-instance';

export const fetchUserList = createAsyncThunk(
    'user/fetchUserListStatus',
    async () => {
        const response = await axios.get('/users');
        return response.data;
    }
);