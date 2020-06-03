import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddTodo from './AddTodo/AddTodo';
import TodoItem from './TodoItem/TodoItem';
import { todosActions, todosOperations, todosSelectors } from '../../../state/ducks/todos';
import classes from './TodoList.module.css';

const TodoList = (props) => {

    useEffect(() => {
        if (!props.todoList.length) {
            props.fetchTodos();
        }
    }, []);

    return (
        <>
            <h1>Add Todo</h1>
            <AddTodo />
            <h1>Todo List</h1>
            <div className={classes.Filter}>
                <div onClick={() => props.setFilter()}>Show all</div>
                <div onClick={() => props.setFilter('admin')}>Show admin's</div>
                <div onClick={() => props.setFilter('user')}>Show user's</div>
            </div>
            <div className={classes.TodoList}>
                {props.todoList.map(todo => (
                    <TodoItem item={todo} key={todo.id} />
                ))}
            </div>
        </>
    );
};

TodoList.propTypes = {
    todoList: PropTypes.arrayOf(PropTypes.object)
}

const mapStateToProps = state => ({
    todoList: todosSelectors.getTodosByUser(state)
});

const mapDispatchToProps = dispatch => ({
    fetchTodos: () => dispatch(todosOperations.fetchTodos()),
    setFilter: (user) => dispatch(todosActions.setFilter(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);