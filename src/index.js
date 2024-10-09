import React from "react";
import "./scss/custom.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createRoot } from 'react-dom/client';

import { SpeedInsights } from "@vercel/speed-insights/react"

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <React.StrictMode>
        <SpeedInsights />
        <App tab="home" />
    </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
