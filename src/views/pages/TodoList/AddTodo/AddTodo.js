import React, { Component } from 'react';
import { connect } from 'react-redux';
import { todosOperations } from '../../../../state/ducks/todos';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import classes from './AddTodo.module.css';

const addTodo = (props) => (
    <Formik
        initialValues={{ title: '', description: '' }}
        validate={values => {
            const errors = {};
            if (!values.title) {
                errors.title = 'Title required';
            }
            if (!values.description) {
                errors.description = 'Description required';
            }
            return errors;
        }}
        onSubmit={(values, { resetForm }) => {
            props.addTodo(values, resetForm);
        }}
    >
        {({ isValid, dirty }) => (
            <Form className={classes.AddTodo}>
                <div className={classes.InputContainer}>
                    <Field type="text" name="title" placeholder="Title" />
                    <ErrorMessage name="title" component="div" className={classes.ValidationError} />
                </div>
                <div className={classes.InputContainer}>
                    <Field type="description" name="description" placeholder="Description" />
                    <ErrorMessage name="description" component="div" className={classes.ValidationError} />
                </div>
                <button type="submit" disabled={!isValid || !dirty}>Add Todo</button>
            </Form>
        )}
    </Formik>
);


const mapDispatchToProps = dispatch => ({
    addTodo: (todo, resetForm) => dispatch(todosOperations.addTodo(todo, resetForm))
})

export default connect(null, mapDispatchToProps)(addTodo);