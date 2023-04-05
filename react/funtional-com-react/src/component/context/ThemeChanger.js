import React, { useState } from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"
export const ThemeContext=React.createContext("")

function App(){

    let [theme,setTheme]=useState("light")

    const handleTheme=()=>{
        if(theme  =='light')
        {
            setTheme('dark')
        }else{
            setTheme('light')
        }
    }

    return(
   
    <ThemeContext.Provider value={theme}>
   
       <button onClick={handleTheme}>change Theme</button>
       <NavBar></NavBar>
       <Footer></Footer>

    </ThemeContext.Provider>
    
    )
}
export default App