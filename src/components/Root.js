import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {HashRouter, BrowserRouter} from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'
import App from  './App'
import history from '../history'

class Root extends Component {
    static propTypes = {

    };

    render() {
        return (
            <Provider store = {this.props.store}>
                <ConnectedRouter history={history}>
                    <App />
                </ConnectedRouter>
            </Provider>
        )
    }
}

export default Root