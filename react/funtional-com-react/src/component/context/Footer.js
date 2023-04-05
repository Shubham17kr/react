import { useContext } from "react"
import { ThemeContext } from "./ThemeChanger"
import "./theme.css"


function Footer()
{

    return(<>
        <div>this is footer</div>
        <FooterOptions/>
        </>
    )
}

function FooterOptions(){

    let CTheme= useContext(ThemeContext)

    return <div className={CTheme == 'light'?'light':'dark'}>footer</div>
    


}
export default Footer