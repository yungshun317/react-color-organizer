import React, { useState } from "react";
import colorData from "./color-data.json";
import ColorList from "./ColorList.js";

// [1] `App`will be the only component that holds state 
export default function App() {
	// `useState` for state management
	const [colors, setColors] = useState(colorData);
	return (
		<ColorList
	        colors={colors}
	        onRemoveColor={id => {
	        	const newColors = colors.filter(color => color.id !== id);
	        	setColors(newColors);
	        }}
	        onRateColor={(id, rating) => {
	        	const newColors = colors.map(color =>
	        	    color.id === id ? { ...color, rating } : color
                );
                setColors(newColors);
	        }} 
	    />
	);
}