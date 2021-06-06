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
		    <h1>Details</h1>
		</div>
	);
}