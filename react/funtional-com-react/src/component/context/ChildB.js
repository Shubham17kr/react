import React from "react"
import ChildC from "./ChildC"
function ChildB({a,b}){
    return(
        <div>
            <h1>this is childB and it's children is C</h1>
            <ChildC c={a} d={b}/>
        </div>
    )
}
export default ChildB