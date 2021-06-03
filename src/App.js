import React, { useState } from "react";
import colorData from "./color-data.json";
import ColorList from "./ColorList.js";
import AddColorForm from "./AddColorForm";
import { v4 } from "uuid"; 

// [1] `App`will be the only component that holds state 
export default function App() {
	// `useState` for state management
	const [colors, setColors] = useState(colorData);
	return (
		<>
		    <AddColorForm />
		    <ColorList />
	    </>
	);
}