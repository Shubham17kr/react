import { useContext } from "react"
import { ThemeContext } from "./ThemeChanger"
import "./theme.css"


function NavBar(){

    return(
        <>
        <div>this is navbar</div>
        <Options></Options>
        <Options></Options>
        <Options></Options>
        <h1>----------------------</h1>
        </>
    )
}

function Options(){

    let Ctheme = useContext(ThemeContext)

    return <div className={Ctheme == 'light'?'light':'dark'}>options1</div>
    


}
export default NavBar