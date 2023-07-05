import {BrowserRouter} from "react-router-dom";
import {render} from "react-dom";

import React from "react";

import App from "./app/App";
import ThemeProvider from "./app/providers/theme/ThemeProvider";

import './shared/config/i18nConfig/i18n';

render(
    <ThemeProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ThemeProvider>,
    document.getElementById('root')
);