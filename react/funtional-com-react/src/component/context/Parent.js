import React, { useState } from "react";
import ChildA from "./ChildA";
function Parent(){
    const[firstName,setfirstName]=useState("adam")
    const[lastName,setlastName]=useState("smith")

    return(
        <>
          <h1>this is parent class</h1>
          <ChildA fname={firstName} lname={lastName}/>
        </>
    )
}
export default Parent