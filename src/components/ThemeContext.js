import React, { createContext, useContext, useState} from "react";

const ThemeContext = createContext();

export function ThemeContextProvider({children}) {
    const [nightOn, setNightOn] = useState(false);
    const [sunOn, setSunOn] = useState(true);

    return (
        <ThemeContext.Provider value={{nightOn, setNightOn, sunOn, setSunOn}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext)
}
