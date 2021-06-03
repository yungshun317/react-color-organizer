import React from "react";
import { FaTrash } from "react-icons/fa";

import StarRating from "./StarRating";
import { useColors } from "./ColorProvider";

// [3] `rating` is passed down to `StarRating`
export default function Color({ 
	id, 
	title, 
	color, 
	rating
}) {
	const { rateColor, removeColor } = useColors();
	return (
		<section>
		    <h1>{title}</h1>
		    <button onClick={() => removeColor(id)}>
		        <FaTrash />
		    </button>
		    <div style={{ height: 50, backgroundColor: color }} />
		    <StarRating
		        selectedStars={rating}
		        onRate={rating => rateColor(id, rating)} 
		    />
		</section>
	);
}