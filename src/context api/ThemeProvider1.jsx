import { useState } from 'react'
import ThemeContext from './themeContext';

function ThemeProvider1({children}) {
    let[theme,setTheme]=useState("light");

    function toggleTheme(){
        setTheme(theme==="light"?"dark":"light")
    }
  return (
    <>
    <ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
    </>
  )
}

export default ThemeProvider1