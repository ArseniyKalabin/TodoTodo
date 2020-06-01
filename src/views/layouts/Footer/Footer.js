import React, { useState } from 'react';
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

export default Footer;
