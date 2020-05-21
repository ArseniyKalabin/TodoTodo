import React from 'react';
import { connect } from 'react-redux';
import { authSelectors } from '../../state/ducks/auth';
import { permissionList } from '../../utils/constants';
import { checkPermissionRank } from '../../utils/permissionUtils';

const privateSection = (props) => {

    const permittedRole = props.permission ? props.permission : permissionList.user;

    if (!props.isAuthenticated) {
        return null;
    }

    if (checkPermissionRank(props.userRole) >
        checkPermissionRank(permittedRole)) {
        return null;
    }

    return (
        <>
            {props.children}
        </>
    );

}

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.getAuthStatus(state),
    userRole: authSelectors.getUserRole(state)
});

export default connect(mapStateToProps)(privateSection);