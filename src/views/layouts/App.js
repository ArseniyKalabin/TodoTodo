import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from '../../routes';
import axios from '../../utils/axios-instance';
import withErrorHandler from '../enhancers/withErrorHandler';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import LoadingOverlay from '../UI/LoadingOverlay/LoadingOverlay';
import './App.css';


function App() {
    return (
        <div className="App">
            <Header />

            <main className="Content">
                <Switch>
                    {routes.map(route => (
                        <Route
                            key={route.path ? route.path : "404"}
                            {...route} />
                    ))}
                </Switch>
            </main>

            <Footer />
            <LoadingOverlay />
        </div>
    );
}

export default withErrorHandler(App, axios);
