import React from "react";
import { Providor } from "react-redux"
import { render } from "react-dom";

import store from "./app/Redux/store";
import App from "./app/Containers/App.js"
import './app/Styles/style.scss'

render(
        //<Providor store={store}>
            <App />
        //</Providor>,
        ,document.getElementById("root")
        );