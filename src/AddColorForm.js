import React, { useRef } from "react";

// [6] Use refs which store values for the lifetime of a component 
export default function AddColorForm({ onNewColor = f => f }) {
	const txtTitle = useRef();
	const hexColor = useRef();

	const submit = e => { 
		e.preventDefault();
		const title = txtTitle.current.value;
		const color = hexColor.current.value;
		onNewColor(title, color);
		txtTitle.current.value = "";
		hexColor.current.value = "";
	};

	return (
		<form onSubmit={submit}>
		    <input ref="txtTitle" type="text" placeholder="color title..." required />
		    <input ref={hexColor} type="color" required />
		    <button>ADD</button>
		</form>
	);
}