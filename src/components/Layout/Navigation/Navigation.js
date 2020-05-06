import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';

const navigation = (props) => (
    <nav>
        <ul className={classes.Navigation}>
            <li>
                <NavLink to="/" exact activeClassName={classes.active}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/todolist" activeClassName={classes.active}>Todo list</NavLink>
            </li>
        </ul>
    </nav>
);

export default navigation;