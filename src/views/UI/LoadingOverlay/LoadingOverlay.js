import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classes from './LoadingOverlay.module.css';
import { loadingSelectors } from '../../../state/ducks/loading';

const loadingOverlay = (props) => (
    (props.loading) ? (
        <div className={classes.Overlay}>
            <div className={classes.Loader}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>) : null
);

loadingOverlay.propTypes = {
    loading: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    loading: loadingSelectors.getLoadingStatus(state)
});

export default connect(mapStateToProps)(loadingOverlay);