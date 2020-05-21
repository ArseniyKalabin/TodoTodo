import * as types from './types';

export const fetchUserListRequest = () => ({
    type: types.FETCH_USERLIST_REQUEST
});

export const fetchUserListSuccess = (users) => ({
    type: types.FETCH_USERLIST_SUCCESS,
    userList: users
});

export const fetchUserListFailure = () => ({
    type: types.FETCH_USERLIST_FAILURE
});