import { Component } from "react"
import { movies } from "../movieData"



class MovieList extends Component{

    render(){
        let movieArr=movies.results;
        return(

            <>
            <div>
                <h3 className="text-center"><strong>Trending</strong></h3>
            </div>
            <div className="movie-card">
           { movieArr.map((movieEle)=>(
            <div className="card">
            <img src="https://free4kwallpapers.com/uploads/originals/2021/12/24/spiderman-miles-morales-wallpaper.jpg" className="card-img-top movie-img" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{movieEle.original_title}</h5>
              
             
            </div>
          </div>
                
           ))
           }

            </div>
           </>

        )
    }

}
export default MovieList;