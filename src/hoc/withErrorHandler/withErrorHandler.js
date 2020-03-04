import React, { Component } from "react";

import Aux from "./../Auxiliary/auxiliary";
import Modal from "./../../components/UI/Modal/Modal";



const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        constructor() {
            super()
            this.reqInterceptor = axios.interceptors.request.use(req => {
                console.log("[withErrorHandler] req = ", req);
                this.setState({ error: null });
                return req;
            });

            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                console.log("[withErrorHandler] error = ", error);
                this.setState({ error: error });
            });
        }


        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }


        errorConfirmed = () => {
            this.setState({ error: null });
        }

        render() {
            console.log("[ withErrorHandler ] RENDRING....")
            return (
                <Aux>
                    <Modal
                        show={this.state.error}
                        closeModel={this.errorConfirmed}>{this.state.error ? this.state.error.message : null}</Modal>
                    <WrappedComponent {...this.props} />
                </Aux>

            )
        }

    }

}

export default withErrorHandler;