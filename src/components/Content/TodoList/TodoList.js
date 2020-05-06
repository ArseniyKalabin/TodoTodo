import React, { Component } from 'react';
import TodoItem from './TodoItem/TodoItem';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './TodoList.module.css';

class TodoList extends Component {

    componentDidMount() {
        if (!this.props.todoList.length) {
            this.props.fetch();
        }
    }

    render() {
        return (
            <Aux>
                <h1>ToDo List</h1>
                <div className={classes.TodoList}>
                    {this.props.todoList.map(todo => (
                        <TodoItem item={todo} key={todo.id} />
                    ))}
                </div>
            </Aux>
        );
    }
};

export default TodoList;