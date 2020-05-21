import axios from '../../../utils/axios-instance';
import * as actions from './actions';

export const fetchUserList = () => {
    return dispatch => {
        dispatch(actions.fetchUserListRequest());
        axios.get('/users')
            .then(response => {
                dispatch(actions.fetchUserListSuccess(response.data));
            })
            .catch(error => {
                dispatch(actions.fetchUserListFailure());
            });
    };
}