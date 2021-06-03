import React from "react";
import Color from "./Color";

// [2] `colors` are passed down from `App`
export default function ColorList({ 
	colors = [], 
	onRemoveColor = f => f,
	onRateColor = f => f
}) {
	if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>;
	return (
	    <div>
	        {
	        	colors.map(color => 
	        	    <Color 
	        	        key={color.id} 
	        	        {...color} 
	        	        onRemove={onRemoveColor}
	        	        onRate={onRateColor} 
	        	    />)
	        }
	    </div>
	);
}