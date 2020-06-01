import React, { useEffect } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { authOperations, authSelectors } from '../../../state/ducks/auth';
import classes from './SignIn.module.css';

const SignIn = (props) => {

    useEffect(() => {
        if (!props.isAuthenticated) {
            props.autoSignIn();
        }
    }, []);

    const loggedRedirect = (isAuthenticated) => {
        if (isAuthenticated) {
            return <Redirect to="/" />;
        }
    }

    const loginFormRender = (handler) => (
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
    return (
        <>
            {loggedRedirect(props.isAuthenticated)}
            <h1>Please sign in to continue!</h1>
            {loginFormRender(props.signInHandler)}
        </>
    );

};

SignIn.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.getAuthStatus(state)
});

const mapDispatchToProps = dispatch => ({
    signInHandler: (authData) => dispatch(authOperations.signIn(authData)),
    autoSignIn: () => dispatch(authOperations.autoSignIn())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);