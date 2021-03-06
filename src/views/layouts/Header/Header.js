import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/icon.png';
import Navigation from './Navigation/Navigation';
import UserInfo from './UserInfo/UserInfo';
import classes from './Header.module.css';
import PrivateSection from '../../enhancers/PrivateSection';

const Header = (props) => (
    <header className={classes.Header} >
        <Link to="/">
            <img src={logo} className={classes.Logo} alt="logo" />
        </Link>
        <Navigation />
        <PrivateSection>
            <UserInfo />
        </PrivateSection>
    </header>
);

export default Header;