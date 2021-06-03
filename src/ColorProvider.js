import React, { createContext, useContext, useState } from "react";
import { v4 } from "uuid";

import colorData from "./color-data.json";

const ColorContext = createContext();

// [10] Create `useColors` hook with context
export const useColors = () => useContext(ColorContext);

// [9] Render `ColorContext.Provider`
export default function ColorProvider({ children }) {
	const [colors, setColors] = useState(colorData);

	const addColor = (title, color) =>
	    setColors([
	    	...colors,
	    	{
	    		id: v4(),
	    		rating: 0,
	    		title,
	    		color
	    	}
	    ]);

	const removeColor = id => setColors(colors.filter(color => color.id !== id));

    const rateColor = (id, rating) =>
        setColors(
        	colors.map(color => (color.id === id ? { ...color, rating } : color))
        );

	return (
		<ColorContext.Provider value={{ colors, addColor, removeColor, rateColor }}>
		    { children }
		</ColorContext.Provider>
	);
}

