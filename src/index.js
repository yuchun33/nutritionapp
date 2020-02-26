import React from "react"
import ReactDOM from "react-dom"
import App from "./App.js"
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import nutritionApp from './reducers'
import {applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

let store = createStore(nutritionApp, applyMiddleware(thunk))
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById("root"))