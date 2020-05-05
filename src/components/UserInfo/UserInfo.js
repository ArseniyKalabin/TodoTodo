import React, { Component } from 'react';
import classes from './UserInfo.module.css';
import userIcon from '../../assets/img/user.png';

class userInfo extends Component {
    state = {
        opened: false
    }

    toggleUserInfoHandler = (opened) => {
        this.setState({ opened: !opened });
    }

    attachedClasses = (opened) => {
        let attachedClasses = [classes.Dropdown, classes.Close];
        if (opened) {
            attachedClasses = [classes.Dropdown, classes.Opened];
        }
        return attachedClasses.join(' ');
    }

    render() {
        return (
            <div className={classes.UserInfoContainer}>
                <div className={classes.UserInfo} onClick={() => this.toggleUserInfoHandler(this.state.opened)}>
                    <div className={classes.UserIcon}>
                        <img src={userIcon} alt="user" />
                    </div>
                    <ul className={this.attachedClasses(this.state.opened)}>
                        <li>Name: {this.props.user.name}</li>
                        <li>Role: {this.props.user.role}</li>
                    </ul>
                </div>

                <div className={classes.SignOut} onClick={this.props.singout}>Sign Out</div>
            </div>
        );
    }
}
export default userInfo;