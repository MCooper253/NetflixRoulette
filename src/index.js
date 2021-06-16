import React from "react";
import { Provider } from "react-redux"
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"

import { store } from './app/Redux/store.js'
import App from "./app/Containers/App.js"
import './app/Styles/style.scss'

render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
);