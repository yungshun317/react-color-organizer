import React from "react";
import ColorList from "./ColorList.js";
import AddColorForm from "./AddColorForm";

// [1] `App`will be the only component that holds state 
export default function App() {
	return (
		<>
		    <AddColorForm />
		    <ColorList />
	    </>
	);
}