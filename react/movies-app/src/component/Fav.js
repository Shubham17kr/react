import { Component } from "react";
import { movies } from "../movieData";

class Fav extends Component {
  render() {
    let movieArr = movies.results;
    let genreId={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"}
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <ul className="list-group genre-selector">
              <li className="list-group-item">Favourite Item</li>
              <li className="list-group-item">Action</li>
              <li className="list-group-item">Action</li>
              <li className="list-group-item">Action</li>
              <li className="list-group-item">Action</li>
            </ul>
          </div>

          <div className="col-9 fav-table">
            <div className="row">
              <input
                type="text"
                class="form-control col"
                placeholder="Search"
              />
              <input type="text" class="form-control col" />
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">popularity</th>
                  <th scope="col">Rating</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
               
                 {
                    movieArr.map((movieEle)=>(
                        <tr>
                        <th scope="row"><img style={{width:"8rem",padding:"1rem"}} src={`https://image.tmdb.org/t/p/original/${movieEle.backdrop_path}`}/>{movieEle.title}</th>
                        <td>{genreId[movieEle.genre_ids[0]]}</td>
                        <td>{movieEle.popularity}</td>
                        <td>{movieEle.vote_average}</td>
                        <td><button type="button" class="btn btn-danger">Danger</button></td>
                        </tr>
                    ))
                 } 
               

              </tbody>
            </table>

            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
    
                 </ul>
           </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Fav;
