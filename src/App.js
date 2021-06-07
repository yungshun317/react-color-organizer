import React from "react";
import { Switch, Route, Link } from "react-router-dom";

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
		        <Route exact path="/">
		            <ColorList />
		        </Route>
		        <Route path="/:id">
		            <ColorDetails />
		        </Route>
		    </Switch>
	    </ColorProvider>
	);
}