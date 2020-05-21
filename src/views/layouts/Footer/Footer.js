import React, { Component } from 'react';
import classes from './Footer.module.css';

class Footer extends Component {
    state = {
        counter: 0
    }

    throwErrorHandler = () => {
        this.setState(state => ({ counter: state.counter + 1 }));
    }
    render() {
        if (this.state.counter === 3) {
            throw new Error('I crashed!');
        }
        return (
            <footer className={classes.Footer} onClick={this.throwErrorHandler}>
                <div>2020</div>
            </footer>
        )
    }
};

export default Footer;
