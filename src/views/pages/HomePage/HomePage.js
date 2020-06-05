import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { authSelectors } from '../../../state/ducks/auth';

const homePage = (props) => (
    <h1>
        Welcome, {props.user.name}!
    </h1>
);

homePage.propsTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        role: PropTypes.string
    })
};

const mapStateToProps = state => ({
    user: authSelectors.getUserData(state)
})

export default connect(mapStateToProps)(homePage);