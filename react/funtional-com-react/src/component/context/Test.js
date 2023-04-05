import React,{useContext,useState} from "react"
let context=React.createContext(null)

function Test(){
    const[firstName,setfirstName]=useState("adam");
    const[lastName,setlastName]=useState("smith");

    
    return(
       <context.Provider value={{firstName,lastName}}>
        <h1>this is parent class</h1>
        <ChildA/>
       </context.Provider>

    )
}

function ChildA(){
    return(
        <>
        <h1>this is childA</h1>
        <ChildB/>
        </>
    )
}
function ChildB(){
    return(
        <>
        <h1>this is childB</h1>
        <ChildC/>
        </>
    )
}
function ChildC(){

    const {firstName,lastName}=useContext(context)
    return(
        <>

        <h1>this is childC</h1>
        <h1>{firstName}</h1>
        <h1>{lastName}</h1>

        </>
    )
}
export default Test