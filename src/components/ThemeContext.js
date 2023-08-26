import React, { createContext, useState} from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider= ({children}) => {
    const [nightOn, setNightOn] = useState(false);
    const [sunOn, setSunOn] = useState(true);

    return (
        <ThemeContext.Provider value={{nightOn, setNightOn, sunOn, setSunOn}}>
            {children}
        </ThemeContext.Provider>
    )
}

// export function useTheme() {
//     return useContext(ThemeContext)
// }
