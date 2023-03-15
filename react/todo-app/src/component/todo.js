import { Component } from "react";



class Todo extends Component{

    constructor(){

        super();
        this.state={
            tasks:[],
            currTask:""

        }
    }
    handleChange=(e)=>{

        this.setState({
            currTask:e.target.value
        })
    }

    handleAddTask=()=>{

        this.setState({
            tasks:[...this.state.tasks,{task:this.state.currTask,id:this.state.tasks.length+1}],
            currTask:""
        })
    }

    handleDelete=(id)=>{

        let narr=this.state.tasks.filter((a)=>{
            return a.id != id
        })
        this.setState({
            tasks:[...narr]
        })
        
    }
    render(){
        return(
        <div> 
            <input type="text" value={this.state.currTask} onChange={this.handleChange}/>
            <button onClick={this.handleAddTask}>ADD TASK</button>

            <ul>
                {this.state.tasks.map((taskObj)=>

                    <li key={taskObj.id}>
                        <p>{taskObj.task}</p>
                        <button onClick={()=>this.handleDelete(taskObj.id)}>delete</button>
                    </li>

                )}
            </ul>

        </div>
        )
}
}

export default Todo;