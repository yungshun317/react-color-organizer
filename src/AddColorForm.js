import React, { useState } from "react";

import { useInput } from "./hooks";
import { useColors } from "./ColorProvider";

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
export default function AddColorForm() {
	const [titleProps, resetTitle] = useInput("");
	const [colorProps, resetColor] = useInput("#000000");
	const { addColor } = useColors();

	const submit = e => {
		e.preventDefault();
		addColor(titleProps.value, colorProps.value);
		resetTitle();
		resetColor();
	};

	return (
		<form onSubmit={submit}>
		    <input
		        {...titleProps}
		        type="text"
		        placeholder="color title..."
		        required
		    />
		    <input
		        {...colorProps}
		        type="color"
		        required
		    />
		    <button>ADD</button>
		</form>
	);
}