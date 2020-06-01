import React from "react";
import { connect } from 'react-redux';
import { Redirect } from "react-router";
import PropTypes from 'prop-types';
import { authSelectors } from '../../state/ducks/auth';
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

    WithPermissions.propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        userRole: PropTypes.string
    }

    const mapStateToProps = state => ({
        isAuthenticated: authSelectors.getAuthStatus(state),
        userRole: authSelectors.getUserRole(state)
    });

    return connect(mapStateToProps)(WithPermissions);

};

export default withPermissions;