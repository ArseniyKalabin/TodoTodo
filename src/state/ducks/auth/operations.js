import axios from '../../../utils/axios-instance';
import * as actions from './actions';
import { setAuthToken, checkAuthToken, removeAuthToken } from './utils';

export const signIn = (authData) => dispatch => {
    dispatch(actions.signInRequest());
    axios.post('/login', authData)
        .then(response => {
            setAuthToken(response.data.name);
            dispatch(actions.signInSuccess(response.data));
        })
        .catch(error => {
            dispatch(actions.signInFailure());
        });
};

export const autoSignIn = () => dispatch => {
    if (checkAuthToken()) {
        dispatch(actions.signInRequest());
        axios.get('/me')
            .then(response => {
                dispatch(actions.signInSuccess(response.data));
            })
            .catch(error => {
                removeAuthToken();
                dispatch(actions.signInFailure());
            });
    }
};

export const signOut = () => dispatch => {
    dispatch(actions.signOutRequest());
    removeAuthToken();
    axios.post('/logout')
        .then(response => {
            dispatch(actions.signOutSuccess());
        })
        .catch(error => {
            dispatch(actions.signOutFailure());
        });
};