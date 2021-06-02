import React from "react";
import { FaStar } from "react-icons/fa";

// [5] Clickable stars
export default function Star({ selected = false, onSelect = f => f }) {
	return <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />;
}