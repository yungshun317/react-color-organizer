import React from "react";
import Color from "./Color";

// [2] `colors` are passed down from `App`
export default function ColorList({ colors = [] }) {
	if (!colors.length) return <div>No Colors Listed.</div>;
	return (
	    <div>
	        {
	        	colors.map(color => <Color key={color.id} {...color} />)
	        }
	    </div>
	);
}