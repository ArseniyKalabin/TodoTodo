import React, { useState, useEffect } from 'react';
import classes from './TodoItem.module.css';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { todosOperations } from '../../../../state/ducks/todos';
import PrivateSection from '../../../enhancers/PrivateSection';

const TodoItem = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        setIsEditing(false);
    }, [props.item]);

    const toogleEditingHandler = () => {
        setIsEditing(isEditing => !isEditing);
    }
    return (
        <Formik
            initialValues={{
                title: props.item.title,
                description: props.item.description
            }}
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
            onReset={() => {
                toogleEditingHandler();
            }}
        >
            {({ values, isValid, dirty, handleReset }) => (
                <Form className={classes.TodoItem}>
                    <div className={classes.Title}>
                        <Field
                            type="text"
                            name="title"
                            placeholder="Title"
                            disabled={!isEditing} />
                        <ErrorMessage name="title" component="div" className={classes.ValidationError} />
                    </div>
                    <div className={classes.Description}>
                        <Field
                            type="description"
                            name="description"
                            placeholder="Description"
                            disabled={!isEditing} />
                        <ErrorMessage name="description" component="div" className={classes.ValidationError} />
                    </div>
                    <div className={classes.CreatedBy}>{props.item.createdBy}</div>
                    <div className={classes.ControlContainer}>
                        {isEditing ? (
                            <>
                                <button
                                    className={classes.Red}
                                    onClick={handleReset}
                                >Cancel</button>
                                <button
                                    type="button"
                                    onClick={() => props.updateHandler(props.item.id, values)}
                                    disabled={!isValid || !dirty}
                                    className={classes.Green}
                                >Apply</button>
                            </>
                        ) : (
                                <PrivateSection permission={props.item.createdBy}>
                                    <button
                                        type="button"
                                        onClick={() => props.deleteHandler(props.item.id)}
                                        className={classes.Red}
                                    >Delete</button>
                                    <button
                                        onClick={toogleEditingHandler}
                                        className={classes.Orange}
                                    >Update</button>
                                </PrivateSection>
                            )}
                    </div>
                </Form>
            )}
        </Formik>
    );
};

const mapDispatchToProps = (dispatch) => ({
    deleteHandler: (id) => dispatch(todosOperations.deleteTodo(id)),
    updateHandler: (id, data) => dispatch(todosOperations.updateTodo({ updatedId: id, updatedData: data }))
})

export default connect(null, mapDispatchToProps)(TodoItem);