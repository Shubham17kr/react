import { useEffect, useState } from "react"

function Ue1()
{
    const [count,setCount]=useState(0);

    useEffect(()=>{

        document.title=`this is title ${count}`
    })

    return(
        <div>
            <h1>count= {count}</h1>
            <button onClick={()=>setCount(count+1)}>+1</button>

        </div>
    )
}
export default Ue1