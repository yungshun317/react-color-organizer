import React from "react";

import Star from "./Star";

export default function StarRating({ totalStars = 5, selectedStars = 0 }) {
	return (
		<>
		    {createArray(totalStars).map((n, i) => (
		    	<Star
		    	    key={i}
		    	    selected={selectedStars > i}
		    	/>
		    ))}
		    <p>
		        {selectedStars} of {totalStars} stars
		    </p>
		</>
	);
}