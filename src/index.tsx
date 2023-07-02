import {BrowserRouter} from "react-router-dom";
import {createRoot} from "react-dom/client";
import React from "react";

import App from "./App";

import ThemeProvider from "./theme/ThemeProvider";

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);