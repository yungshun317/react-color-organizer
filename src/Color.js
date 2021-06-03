import React from "react";
import { FaTrash } from "react-icons/fa";

import StarRating from "./StarRating";

// [3] `rating` is passed down to `StarRating`
export default function Color({ id, title, color, rating, onRemove = f => f }) {
	return (
		<section>
		    <h1>{title}</h1>
		    <button onClick={() => onRemove(id)}>
		        <FaTrash />
		    </button>
		    <div style={{ height: 50, backgroundColor: color }} />
		    <StarRating selectedStars={rating} />
		</section>
	);
}