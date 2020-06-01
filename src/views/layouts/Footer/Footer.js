import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './Footer.module.css';

const Footer = (props) => {

    const [counter, setCounter] = useState(0);

    if (counter === 3) {
        throw new Error('I crashed!');
    }

    return (
        <footer className={classes.Footer} onClick={() => setCounter(counter => counter + 1)}>
            <div>2020</div>
        </footer>
    )
};

Footer.propTypes = {
    counter: PropTypes.number
}

export default Footer;
