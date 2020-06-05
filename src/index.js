import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/layouts/App';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './state/store';

const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware()]
});

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);