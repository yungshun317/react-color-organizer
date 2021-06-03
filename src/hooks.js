import { useState } from "react";

// [7] Create custom hooks for abstracting away redundancy
export const useInput = initialValue => {
	const [value, setValue] = useState(initialValue);
	return [
	    { value, onChange: e => e.setValue(e.target.value) },
	    () => setValue(initialValue)
	];
};