import React from 'react';
import classes from './TodoItem.module.css';

const todoItem = (props) => (
    <div className={classes.TodoItem}>
        <div className={classes.Title}>{props.item.title}</div>
        <div className={classes.Description}>{props.item.description}</div>
        <div className={classes.CreatedBy}>{props.item.createdBy}</div>
    </div>
);

export default todoItem;