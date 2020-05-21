import React from "react";
import { connect } from 'react-redux';
import { authSelectors } from '../../state/ducks/auth';
import { Redirect } from "react-router";
import { permissionList } from '../../utils/constants';
import { checkPermissionRank } from '../../utils/permissionUtils';

const withPermissions = (WrappedConponent, permittedRole = permissionList.user) => {

    const WithPermissions = (props) => {
        if (!props.isAuthenticated) {
            return <Redirect to="/login" />
        }

        if (checkPermissionRank(props.userRole) >
            checkPermissionRank(permittedRole)) {
            return <Redirect to="/" />
        }

        return <WrappedConponent {...props} />;
    }

    const mapStateToProps = state => ({
        isAuthenticated: authSelectors.getAuthStatus(state),
        userRole: authSelectors.getUserRole(state)
    });

    return connect(mapStateToProps)(WithPermissions);

};

export default withPermissions;