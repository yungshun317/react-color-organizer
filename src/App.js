import React, { useState } from "react";
import colorData from "./color-data.json";
import ColorList from "./ColorList.js";

// [1] `App`will be the only component that holds state 
export default function App() {
	// `useState` for state management
	const [colors] = useState(colorData);
	return <ColorList colors={colors} />;
}