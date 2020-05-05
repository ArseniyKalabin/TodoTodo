import React from "react";
import { connect } from 'react-redux';
import { Redirect, Route } from "react-router";

const AuthRoute = (props) => {
    if (props.isLogged) {
        return <Route {...props} />;
    } else {
        return <Redirect to="/login" />
    };


};

const mapStateToProps = state => ({
    isLogged: state.auth.isLogged
});

export default connect(mapStateToProps)(AuthRoute);