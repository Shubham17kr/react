import React from "react"
import ChildB from "./ChildB"
function ChildA({fname,lname}){
    return(
        <div>
            <h1>this is childA and it's children is B</h1>
            <ChildB a={fname} b={lname}/>
        </div>
    )
}
export default ChildA