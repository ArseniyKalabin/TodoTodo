import React, { useState } from 'react';
import { connect } from 'react-redux';
import { authOperations, authSelectors } from '../../../../state/ducks/auth';
import classes from './UserInfo.module.css';
import userIcon from '../../../../assets/img/user.png';

const UserInfo = (props) => {

    const [opened, setOpened] = useState(false);


    const toggleUserInfoHandler = () => {
        setOpened(opened => !opened);
    }

    const attachedClasses = (opened) => {
        let attachedClasses = [classes.Dropdown, classes.Close];
        if (opened) {
            attachedClasses = [classes.Dropdown, classes.Opened];
        }
        return attachedClasses.join(' ');
    }

    return (
        <div className={classes.UserInfoContainer}>
            <div className={classes.UserInfo} onClick={toggleUserInfoHandler}>
                <div className={classes.UserIcon}>
                    <img src={userIcon} alt="user" />
                </div>
                <ul className={attachedClasses(opened)}>
                    <li>Name: {props.user.name}</li>
                    <li>Role: {props.user.role}</li>
                </ul>
            </div>

            <div className={classes.SignOut} onClick={props.singOut}>Sign Out</div>
        </div>
    );
}

const mapStateToProps = state => ({
    user: authSelectors.getUserData(state)
});

const mapDispatchToProps = dispatch => ({
    singOut: () => dispatch(authOperations.signOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);