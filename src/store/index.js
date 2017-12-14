import {createStore, applyMiddleware, compose} from 'redux'
import reducer from '../reducer'
import logger from 'redux-logger'
import randomId from '../middlewares/randomId'
import api from '../middlewares/api'
import thunk from 'redux-thunk'
import {routerMiddleware} from 'react-router-redux'
import history from '../history'

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, api, randomId, routerMiddleware(history), logger))

const store = createStore(reducer, enhancer)

//dev only
window.store = store

export default store