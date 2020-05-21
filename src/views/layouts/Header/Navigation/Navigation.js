import React from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../../../../routes';
import classes from './Navigation.module.css';
import PrivateSection from '../../../enhancers/PrivateSection';

const navigation = (props) => (
    <nav>
        <ul className={classes.Navigation}>
            {navLinks.map(link => (
                <PrivateSection permission={link.permission} key={link.path}>
                    <li>
                        <NavLink to={link.path} exact activeClassName={classes.active}>{link.name}</NavLink>
                    </li>
                </PrivateSection>
            ))}
        </ul>
    </nav>
);

export default navigation;