import * as types from './types';

export const signInRequest = () => ({
    type: types.SIGN_IN_REQUEST
});
export const signInSuccess = (user) => ({
    type: types.SIGN_IN_SUCCESS,
    user: user
});
export const signInFailure = () => ({
    type: types.SIGN_IN_FAILURE
});

export const signOutRequest = () => ({
    type: types.SIGN_OUT_REQUEST
});
export const signOutSuccess = () => ({
    type: types.SIGN_OUT_SUCCESS
});
export const signOutFailure = () => ({
    type: types.SIGN_OUT_FAILURE
});