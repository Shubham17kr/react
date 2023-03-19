import { Component } from "react";


class NavBar extends Component{
    render(){
        return(
            <div style={{display:"flex",color:"blue"}}>
                <h1>Movies App</h1>
                <h2 style={{marginLeft:"2rem",marginTop:"0.7rem"}}>Favourites</h2>
            </div>
        )
    }
}

export default NavBar;