import * as actionTypes from './actionTypes';
import axios from '../../axios-auth';

export const requestStarted = () => ({
    type: actionTypes.REQUEST_STARTED
});

export const signInSuccess = (user) => ({
    type: actionTypes.SIGN_IN_SUCCESS,
    user: user
});
export const signInFailure = () => ({
    type: actionTypes.SIGN_IN_FAILURE
});
export const signInRequest = (authData) => {
    return dispatch => {
        dispatch(requestStarted());
        axios.post('/login', authData)
            .then(response => {
                localStorage.setItem('token', response.data.name);
                dispatch(signInSuccess(response.data));
            })
            .catch(error => {
                dispatch(signInFailure());
            });
    };
};
export const autoSingIn = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token) {
            dispatch(requestStarted());
            axios.get('/me')
                .then(response => {
                    dispatch(signInSuccess(response.data));
                })
                .catch(error => {
                    dispatch(signInFailure());
                });
        }
    };
};

export const signOutSuccess = () => ({
    type: actionTypes.SIGN_OUT_SUCCESS
});
export const signOutFailure = () => ({
    type: actionTypes.SIGN_OUT_FAILURE
});
export const signOutRequest = () => {
    return dispatch => {
        dispatch(requestStarted());
        axios.post('/logout')
            .then(response => {
                localStorage.removeItem('token');
                dispatch(signOutSuccess());
            })
            .catch(error => {
                dispatch(signOutFailure());
            });
    };
};