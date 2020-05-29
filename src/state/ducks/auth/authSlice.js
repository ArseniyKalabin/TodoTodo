import { createSlice } from '@reduxjs/toolkit';
import { signIn, signOut } from './operations';
import { setAuthToken, removeAuthToken } from './utils';

const initialState = {
    isAuthenticated: false,
    user: {
        name: '',
        role: ''
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
    },
    extraReducers: {
        [signIn.fulfilled]: (state, action) => {
            setAuthToken(action.payload.name);
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        [signIn.rejected]: () => {
            removeAuthToken();
            return initialState;
        },
        [signOut.fulfilled]: () => {
            removeAuthToken();
            return initialState;
        }
    }
});

export default authSlice.reducer;