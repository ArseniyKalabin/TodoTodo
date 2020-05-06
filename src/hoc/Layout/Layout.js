import React from 'react';
import Header from '../../containers/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';
import LoadingOverlay from '../../components/UI/LoadingOverlay/LoadingOverlay';
import withErrorHandler from '../withErrorHandler/withErrorHandler';
import axios from '../../axios-auth';
import classes from './Layout.module.css';

const layout = (props) => {
    return (
        <div className="App">
            <Header />
            <main className={classes.Content}>
                {props.children}
            </main>
            <Footer />
            <LoadingOverlay />
        </div>
    );
}



export default withErrorHandler(layout, axios);