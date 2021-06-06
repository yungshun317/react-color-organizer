import React from "react";
import { Switch, Route } from "react-router-dom";

import ColorProvider from "./ColorProvider";
import ColorList from "./ColorList";
import ColorDetails from "./ColorDetails";
import AddColorForm from "./AddColorForm";

// [1] `App`will be the only component that holds state 
export default function App() {
	return (
		<ColorProvider>
		    <AddColorForm />
		    <Switch>
		        <Route path="/">
		            <ColorList />
		        </Route>
		        <Route path="/:id">
		            <ColorDetails />
		        </Route>
		    </Switch>
	    </ColorProvider>
	);
}