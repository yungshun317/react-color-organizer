import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import ColorProvider from "./ColorProvider";

// [8] Use React context
render(
	<BrowserRouter>
	    <App />
    </BrowserRouter>,
    document.getElementById("root")
);