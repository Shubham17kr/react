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
            <div className="movie-list">
           {
            
            movieArr.map((movieEle)=>(
            <div className="card movie-card">
                <img src={`https://image.tmdb.org/t/p/original/${movieEle.backdrop_path}`} className="card-img-top movie-img" alt="..."/>
                <h5 className="card-title movie-title">{movieEle.original_title}</h5>

                <div style={{display:"flex",justifyContent:"center"}}>
                   <a href="#" type="button" className="btn btn-primary movie-btn">Add to Favourite</a>
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