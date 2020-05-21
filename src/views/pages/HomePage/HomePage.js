import React from 'react';
import { connect } from 'react-redux';
import { authSelectors } from '../../../state/ducks/auth';

const homePage = (props) => (
    <h1>
        Welcome, {props.user.name}!
    </h1>
);

const mapStateToProps = state => ({
    user: authSelectors.getUserData(state)
})

export default connect(mapStateToProps)(homePage);