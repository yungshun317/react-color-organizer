import React from "react";

import StarRating from "./StarRating";

// [3] `rating` is passed down to `StarRating`
export default function Color({ title, color, rating }) {
	return (
		<section>
		    <h1>{title}</h1>
		    <div style={{ height: 50, backgroundColor: color }} />
		    <StarRating selectedStars={rating} />
		</section>
	);
}