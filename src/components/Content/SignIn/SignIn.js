import React from 'react';
import { Redirect } from 'react-router';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './SignIn.module.css';

const singIn = (props) => {

    const loggedRedirect = (islogged) => {
        if (islogged) {
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
            {() => (
                <Form className={classes.SignInForm}>
                    <div className={classes.InputContainer}>
                        <Field type="text" name="login" placeholder="Login" />
                        <ErrorMessage name="login" component="div" className={classes.ValidationError} />
                    </div>
                    <div className={classes.InputContainer}>
                        <Field type="password" name="password" placeholder="Password" />
                        <ErrorMessage name="password" component="div" className={classes.ValidationError} />
                    </div>
                    <button type="submit">Sign In</button>
                </Form>
            )}
        </Formik>
    );

    return (
        <Aux>
            {loggedRedirect(props.isLogged)}
            <h1>Please sign in to continue!</h1>
            {loginFormRender(props.signInHandler)}
        </Aux>
    );
};

export default singIn;