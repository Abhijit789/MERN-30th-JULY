import React,{useState} from 'react'

function ThemeProvider() {
    let[theme,setTheme]=useState("light");
    
    function toggleTheme(){
        setTheme(theme==="light"?"dark":"light")
    }

    console.log(theme);
    
  return (
    <>
     <div className={`container h-100 w-50 border border-2 ${theme==="dark"?"bg-dark text-light":"bg-light text-danger"}`}>
        <h1>Hello</h1>
     </div>
     <button className="btn btn-warning" onClick={()=>{toggleTheme()}}>{theme} <i className={theme === "dark" ? "fa-solid fa-moon" : "fa-solid fa-sun"}></i></button>
    </>
  )
}

export default ThemeProvider