import React, { useState } from "react";

/* [6] Use `txtTitle` and `hexColor` refs
import { useRef } from "react";

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
*/

// [6] Use controlled component
export default function AddColorForm({ onNewColor = f => f }) {
	const [title, setTitle] = useState("");
	const [color, setColor] = useState("#000000");

	const submit = e => {
		e.preventDefault();
		onNewColor(title, color);
		setTitle("");
		setColor("");
	};

	return (
		<form onSubmit={submit}>
		    <input
		        value={title}
		        onChange={event => setTitle(event.target.value)}
		        type="text"
		        placeholder="color title..."
		        required
		    />
		    <input
		        value={color}
		        onChange={event => setColor(event.target.value)}
		        type="color"
		        required
		    />
		    <button>ADD</button>
		</form>
	);
}