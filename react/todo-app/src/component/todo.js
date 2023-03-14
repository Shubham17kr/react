import { Component } from "react";



class Todo extends Component{

    constructor(){

        super();
        this.state={
            task:["how r u","what's up"]
        }
    }
    render(){
        return(
        <div> 
            <input type="text"/>
            <button>ADD TASK</button>

            <ul>
                {this.state.task.map((ele)=>

                    <li>
                        <p>{ele}</p>
                    </li>

                )}
            </ul>

        </div>
        )
}
}

export default Todo;