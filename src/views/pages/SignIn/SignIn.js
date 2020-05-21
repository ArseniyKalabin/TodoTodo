import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { authOperations, authSelectors } from '../../../state/ducks/auth';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import classes from './SignIn.module.css';

class SingIn extends Component {
    componentDidMount() {
        if (!this.props.isAuthenticated) {
            this.props.autoSignIn();
        }

    }

    loggedRedirect = (isAuthenticated) => {
        if (isAuthenticated) {
            return <Redirect to="/" />;
        }
    }

    loginFormRender = (handler) => (
        <Formik
            initialValues={{ login: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.login) {
                    errors.login = 'Login required';
                }
                if (!values.password) {
                    errors.password = 'Password required';
                }
                return errors;
            }}
            onSubmit={(values) => {
                handler(values);
            }}
        >
            {({ isValid, dirty }) => (
                <Form className={classes.SignInForm}>
                    <div className={classes.InputContainer}>
                        <Field type="text" name="login" placeholder="Login" />
                        <ErrorMessage name="login" component="div" className={classes.ValidationError} />
                    </div>
                    <div className={classes.InputContainer}>
                        <Field type="password" name="password" placeholder="Password" />
                        <ErrorMessage name="password" component="div" className={classes.ValidationError} />
                    </div>
                    <button type="submit" disabled={!isValid || !dirty}>Sign In</button>
                </Form>
            )}
        </Formik>
    );
    render() {
        return (
            <>
                {this.loggedRedirect(this.props.isAuthenticated)}
                <h1>Please sign in to continue!</h1>
                {this.loginFormRender(this.props.signInHandler)}
            </>
        );
    }

};

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.getAuthStatus(state)
});

const mapDispatchToProps = dispatch => ({
    signInHandler: (authData) => dispatch(authOperations.signIn(authData)),
    autoSignIn: () => dispatch(authOperations.autoSignIn())
})

export default connect(mapStateToProps, mapDispatchToProps)(SingIn);