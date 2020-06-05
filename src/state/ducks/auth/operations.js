import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../utils/axios-instance';
import { checkAuthToken } from './utils';

export const signIn = createAsyncThunk(
    'auth/signInStatus',
    async (authData) => {
        const response = await axios.post('/login', authData);
        return response.data;
    }
);

export const autoSignIn = createAsyncThunk(
    'auth/signInStatus',
    async () => {
        const response = await axios.get('/me');
        return response.data;
    },
    {
        condition: () => {
            if (!checkAuthToken()) {
                return false;
            }
        }
    }
);

export const signOut = createAsyncThunk(
    'auth/signOutStatus',
    async () => {
        const response = await axios.post('/logout');
        return response;
    }
);