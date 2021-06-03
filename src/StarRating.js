import React from "react";

import Star from "./Star";

const createArray = length => [...Array(length)];

// [4] `StarRating` does not store states for color ratings
export default function StarRating({ 
	totalStars = 5, 
	selectedStars = 0, 
	onRate = f => f
}) {
	return (
		<>
		    {createArray(totalStars).map((n, i) => (
		    	<Star
		    	    key={i}
		    	    selected={selectedStars > i}
		    	    onSelect = {() => onRate(i + 1)}
		    	/>
		    ))}
		    <p>
		        {selectedStars} of {totalStars} stars
		    </p>
		</>
	);
}