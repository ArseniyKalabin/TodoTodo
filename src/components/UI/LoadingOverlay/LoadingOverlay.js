import React from 'react';
import { connect } from 'react-redux';
import classes from './LoadingOverlay.module.css';

const loadingOverlay = (props) => (
    (props.loadingFull || props.loadingContent) ? (
        <div className={classes.Overlay}>
            <div className={classes.Loader}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>) : null
);

const mapStateToProps = (state) => ({
    loadingFull: state.auth.loading,
    loadingContent: state.todos.loading
});

export default connect(mapStateToProps)(loadingOverlay);