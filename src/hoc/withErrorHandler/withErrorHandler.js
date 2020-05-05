import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import ErrorPanel from '../../components/UI/ErrorPanel/ErrorPanel';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentDidMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error });
                return Promise.reject(error);
            });
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        showErrorMessage = (error) => {
            let errorMessage = '';
            if (error) {
                if (error.response) {
                    errorMessage = error.response.data.message
                } else if (error.request) {
                    errorMessage = 'Sorry, service is currently not available. Please try again later.';
                }
            }
            return <ErrorPanel
                error={errorMessage}
                confirm={this.errorConfirmed}
            />
        }

        errorConfirmed = () => {
            this.setState({ error: null });
        }

        render() {
            return (
                <Aux>
                    {this.showErrorMessage(this.state.error)}
                    <WrappedComponent {...this.props} />
                </Aux>
            );
        }
    }
}

export default withErrorHandler;