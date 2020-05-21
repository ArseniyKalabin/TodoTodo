import React, { Component } from 'react';
import classes from './TodoItem.module.css';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { todosOperations } from '../../../../state/ducks/todos';
import PrivateSection from '../../../enhancers/PrivateSection';

class TodoItem extends Component {

    state = {
        isEditing: false
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.isEditing !== false) {
            this.setState({ isEditing: false });
        }
    }

    toogleEditingHandler = () => {
        this.setState(state => ({ isEditing: !state.isEditing }));
    }

    render() {
        return (
            <Formik
                initialValues={{
                    title: this.props.item.title,
                    description: this.props.item.description
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
                    this.toogleEditingHandler();
                }}
            >
                {({ values, isValid, dirty, handleReset }) => (
                    <Form className={classes.TodoItem}>
                        <div className={classes.Title}>
                            <Field
                                type="text"
                                name="title"
                                placeholder="Title"
                                disabled={!this.state.isEditing} />
                            <ErrorMessage name="title" component="div" className={classes.ValidationError} />
                        </div>
                        <div className={classes.Description}>
                            <Field
                                type="description"
                                name="description"
                                placeholder="Description"
                                disabled={!this.state.isEditing} />
                            <ErrorMessage name="description" component="div" className={classes.ValidationError} />
                        </div>
                        <div className={classes.CreatedBy}>{this.props.item.createdBy}</div>
                        <div className={classes.ControlContainer}>
                            {this.state.isEditing ? (
                                <>
                                    <button
                                        className={classes.Red}
                                        onClick={handleReset}
                                    >Cancel</button>
                                    <button
                                        type="button"
                                        onClick={() => this.props.updateHandler(this.props.item.id, values)}
                                        disabled={!isValid || !dirty}
                                        className={classes.Green}
                                    >Apply</button>
                                </>
                            ) : (
                                    <PrivateSection permission={this.props.item.createdBy}>
                                        <button
                                            type="button"
                                            onClick={() => this.props.deleteHandler(this.props.item.id)}
                                            className={classes.Red}
                                        >Delete</button>
                                        <button
                                            onClick={this.toogleEditingHandler}
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
};

const mapDispatchToProps = (dispatch) => ({
    deleteHandler: (id) => dispatch(todosOperations.deleteTodo(id)),
    updateHandler: (id, data) => dispatch(todosOperations.updateTodo(id, data))
})

export default connect(null, mapDispatchToProps)(TodoItem);