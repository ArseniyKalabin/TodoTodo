import React, { Component } from 'react';
import ErrorPanel from '../UI/ErrorPanel/ErrorPanel';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            requestError: null,
            scriptError: null,
        }

        static getDerivedStateFromError() {
            const errorMessage = "Enternal error, please, reload the application";
            return { scriptError: errorMessage };
        }

        componentDidMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ requestError: null });
                return req;
            });

            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                let errorMessage = '';
                if (error.response) {
                    if (error.response.data) {
                        errorMessage = error.response.data.message;
                    } else {
                        errorMessage = error.response.statusText;
                    }
                } else if (error.request) {
                    errorMessage = 'Sorry, service is currently not available. Please try again later.';
                }
                this.setState({ requestError: errorMessage });
                return Promise.reject(error);
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmed = () => {
            this.setState({ requestError: null });
        }

        reloadApplication = () => {
            window.location.reload();
        }

        render() {
            if (this.state.scriptError) {
                return <ErrorPanel
                    error={this.state.scriptError}
                    confirmHandler={this.reloadApplication}
                    confirmText="Reload"
                />;
            }
            return (
                <>
                    <ErrorPanel
                        error={this.state.requestError}
                        confirmHandler={this.errorConfirmed}
                        confirmText="Ок"
                    />
                    <WrappedComponent {...this.props} />
                </>
            );
        }
    }
}

export default withErrorHandler;