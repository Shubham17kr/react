import { Component } from "react";
// import { movies } from "../movieData";

import axios from 'axios'

class MovieList extends Component {
constructor()
{
    super();
    this.state={
        hover:"",
        pArr:[1],
        movies:[],
        currPage:1

    }
}

async componentDidMount()
{
  console.log("component did mount")
  const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=81242a2aa2066e052c78ec9ac1700c59&language=en-US&page=${this.state.currPage}`)
  this.setState({
              
    movies:[...res.data.results]

  })

}

handleNext=()=>{

  if(this.state.pArr.length == this.state.currPage)
  {
    this.setState({
      pArr:[...this.state.pArr,this.state.pArr.length+1]
    })
  }
  this.setState({
  currPage:this.state.currPage+1
  },this.changeMovie)

}

changeMovie=async ()=>{

  const res= await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=81242a2aa2066e052c78ec9ac1700c59&language=en-US&page=${this.state.currPage}`)

   this.setState({
    movies:[...res.data.results]
   })
}

handlePrevious=()=>{

  if(this.state.currPage!=1){
  this.setState({

    currPage:this.state.currPage-1
  },this.changeMovie)
}
}

handlePageClick=(ele)=>{

  if(ele != this.state.currPage)
  {
    this.setState({
      currPage:ele
    },this.changeMovie)
  }

}

  render() {
    // let movieArr = movies.results;
    return (
      <>
        <div>
          <h3 className="text-center">
            <strong>Trending</strong>
          </h3>
        </div>
        <div className="movie-list">
          {this.state.movies.map((movieEle) => (
            <div className="card movie-card" onMouseEnter={()=>{this.setState({hover:movieEle.id})}} onMouseLeave={()=>{this.setState({hover:""})}}>
              <img
                src={`https://image.tmdb.org/t/p/original/${movieEle.backdrop_path}`}
                className="card-img-top movie-img"
                alt="..."
              />
              <h5 className="card-title movie-title">
                {movieEle.original_title}
              </h5>

              <div style={{ display: "flex", justifyContent: "center" }}>

                {this.state.hover == movieEle.id && (
                <a href="#" type="button" className="btn btn-primary movie-btn">Add to Favourite</a>)}

              </div>
            </div>
          ))}
        </div>
         
         <div style={{display:"flex",justifyContent:"center"}}>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item"><a className="page-link" href="#" onClick={(this.handlePrevious)}>Previous</a></li>

            {this.state.pArr.map((ele)=>(

                <li className="page-item"><a className="page-link" href="#" onClick={()=>{this.handlePageClick(ele)}}>{ele}</a> </li>

            ))}
            
            
            <li className="page-item"><a className="page-link" href="#" onClick={(this.handleNext)}>Next </a></li>
          </ul>
        </nav>
        </div>
      </>
    );
  }
}
export default MovieList;
