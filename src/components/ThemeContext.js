import React, { createContext, useState} from "react";

const ThemeContext = createContext();

export const ThemeContextProvider= ({ children }) => {
    const [nightOn, setNightOn] = useState(false);
    const [sunOn, setSunOn] = useState(true);

    return (
        <ThemeContext.Provider value={{nightOn, setNightOn, sunOn, setSunOn}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;
