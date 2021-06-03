import React, { useContext } from "react";

import Color from "./Color";
import { ColorContext } from "./";

// [2] `colors` are passed down from `App`
export default function ColorList() {
	const { colors } = useContext(ColorContext);
	if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>;
	return (
	    <div className="color-list">
	        {
	        	colors.map(color => 
	        	    <Color 
	        	        key={color.id} 
	        	        {...color}
	        	    />)
	        }
	    </div>
	);
}