import { createSlice } from '@reduxjs/toolkit';
import { fetchUserList } from './operations';

const initialState = {
    userList: []
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [fetchUserList.fulfilled]: (state, action) => {
            const userList = action.payload;
            state.userList = userList;
        }
    }
});

export default userSlice.reducer;