import {useEffect, useState} from "react"
function Ue3(){
    const[count,setCount]=useState(0)
    const[name,setName]=useState("shubham")

    useEffect(()=>{
        document.title=`this is title ${count} ${name}`
    },[count,name])
    return(

        <div>
            <h1>this is count={count}</h1>
            <h1>this is name={name}</h1>
            <button onClick={()=>setCount(count+1)}>+1</button>
            <button onClick={()=>setName("Aman")}>NameChange</button>
        </div>

    )
}
export default Ue3