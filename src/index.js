import React, { createContext } from "react";
import { render } from "react-dom";

import App from "./App";
import colors from "./color-data";

export const ColorContext = createContext();

// [8] Use React context
render(
	<ColorContext.Provider value={{ colors }}>
	    <App />
    </ColorContext.Provider>,
    document.getElementById("root");
);