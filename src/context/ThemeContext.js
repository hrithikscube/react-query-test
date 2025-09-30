import React, { useState } from 'react';

const ThemeContext = React.createContext()

const ThemeContextProvider = ({children}) => {

    const [isLight, setIsLight] = useState(true)

    const toggleTheme = () => {
        setIsLight((prev) => !prev)
    }

    return (
        <ThemeContext.Provider value={[isLight, toggleTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeContextProvider }