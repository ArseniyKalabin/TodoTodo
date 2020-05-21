import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTodo from './AddTodo/AddTodo';
import TodoItem from './TodoItem/TodoItem';
import { todosOperations, todosSelectors } from '../../../state/ducks/todos';
import classes from './TodoList.module.css';

class TodoList extends Component {

    componentDidMount() {
        if (!this.props.todoList.length) {
            this.props.fetchTodos();
        }
    }

    render() {
        return (
            <>
                <h1>Add Todo</h1>
                <AddTodo />
                <h1>Todo List</h1>
                <div className={classes.TodoList}>
                    {this.props.todoList.map(todo => (
                        <TodoItem item={todo} key={todo.id} />
                    ))}
                </div>
            </>
        );
    }
};

const mapStateToProps = state => ({
    todoList: todosSelectors.getTodosList(state)
});

const mapDispatchToProps = dispatch => ({
    fetchTodos: () => dispatch(todosOperations.fetchTodos())
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);