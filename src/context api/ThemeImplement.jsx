import React, { useContext } from 'react'
import ThemeContext from './themeContext'

function ThemeImplement() {
    let{theme,toggleTheme}=useContext(ThemeContext);
    console.log(theme);
    console.log(toggleTheme);
    
    
  return (
    <>
     <div className="container">
        <div className="row">
            <div className={theme==="light"?"bg:secondary":"bg-dark"}>
                    <p className={theme==="light"?"text-dark":"text-light"}>
                         {theme==="light"?"Light Theme":"Dark Theme"}
                    </p>
            </div>
            <button onClick={toggleTheme} className={theme==="light"?"btn btn-primary":"btn btn-secondary"}> {theme==="light"?"Light Theme":"Dark Theme"}</button>
        </div>
     </div>
    </>
  )
}

export default ThemeImplement