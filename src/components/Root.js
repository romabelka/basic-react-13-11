import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {HashRouter, BrowserRouter} from 'react-router-dom'
import App from  './App'

class Root extends Component {
    static propTypes = {

    };

    render() {
        return (
            <Provider store = {this.props.store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        )
    }
}

export default Root