import React from "react";
import { render } from "react-dom";

import App from "./App";
import ColorProvider from "./ColorProvider";

// [8] Use React context
render(
	<ColorProvider>
	    <App />
    </ColorProvider>,
    document.getElementById("root")
);