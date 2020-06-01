import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { userOperations, userSelectors } from '../../../state/ducks/user';
import classes from './UserList.module.css';


const UserList = (props) => {

    useEffect(() => {
        if (!props.userList.length) {
            props.fetchUserList();
        }
    }, []);

    return (
        <>
            <h1>User List</h1>
            <ul className={classes.UserList}>
                {props.userList.map(user => (
                    <li key={user.name}>
                        <div>Name: {user.name}</div>
                        <div>Role: {user.role}</div>
                    </li>
                ))}
            </ul>
        </>
    );
};

const mapStateToProps = state => ({
    userList: userSelectors.getUserList(state)
});

const mapDispatchToProps = dispatch => ({
    fetchUserList: () => dispatch(userOperations.fetchUserList())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList);