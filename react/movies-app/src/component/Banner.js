import { Component } from "react";


class Banner extends Component{
    render(){
        return(
            <div className="card banner-card">
               <img src="https://free4kwallpapers.com/uploads/originals/2021/12/24/spiderman-miles-morales-wallpaper.jpg" className="card-img-top banner-img" alt="..."/>
               
                  <h1 className="card-title banner-title">Card title</h1>
                  <p className="card-text banner-text"><h4>Some quick example text to build on the card title and make up the bulk of the card's content.</h4></p>
                 
               
           </div>
        )
    }
}

export default Banner;