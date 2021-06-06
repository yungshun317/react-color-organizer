import React from "react";
import { useParams } from "react-router-dom";

import { useColors } from "./ColorProvider";

export function ColorDetails() {
	// let params = useParams();
	// console.log(params);
	let { id } = useParams();
	let { colors } = useColors();
    let foundColor = colors.find(color => color.id === id);
	console.log(foundColor);
	return (
		<div>
		    <div 
		        style={{
		        	backgroundColor: foundColor.color,
		        	height: 100,
		        	width: 100
		        }}
		    ></div>
		    <h1>{foundColor.title}</h1>
		    <h1>{foundColor.color}</h1>
		</div>
	);
}