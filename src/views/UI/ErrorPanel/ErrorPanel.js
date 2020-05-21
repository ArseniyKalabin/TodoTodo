import React from 'react';
import classes from './ErrorPanel.module.css';

const errorPanel = (props) => {

    const showPanelHandler = (error) => {
        let attachedClasses = [classes.ErrorPanel, classes.Close]
        if (error) {
            attachedClasses = [classes.ErrorPanel, classes.Opened]
        }
        return attachedClasses.join(' ');
    }

    return (
        <div className={showPanelHandler(props.error)}>
            <div>{props.error}</div>
            <button onClick={props.confirmHandler}>{props.confirmText}</button>
        </div>
    );
}

export default errorPanel;