import { Component } from "react";
// import { movies } from "../movieData";

class Fav extends Component {

  constructor(){
    super();

    this.state={
      genres:[],
      currGenre:"all genres",
      movie:[],
      movie2:[],
      currText:""
    }
  }

  componentDidMount(){
    let genreId={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"}
    let data=JSON.parse(localStorage.getItem('movies-app') || '[]')

    let tempArr=[]
    tempArr.push("all genres")
    data.map((movieObj)=>{

      if(!tempArr.includes(genreId[movieObj.genre_ids[0]]))
      {
          tempArr.push(genreId[movieObj.genre_ids[0]])
      }
  }) 

  this.setState({
    genres:[...tempArr],
    movie:[...data],
    movie2:[...data]
  })

  }

  handleGenre=(genre)=>{
    this.setState({
      currGenre:genre
    },this.handleFiltering)
    
  }

 handleFiltering=()=>{
     
  let data=JSON.parse(localStorage.getItem('movies-app') || '[]') 
  let genreId={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"}

  if(this.state.currGenre=="all genres")
  {
    this.setState({
      movie:[...data],
      movie2:[...data]
    })
  }else{

    let temp=data.filter((MovieObj)=>genreId[MovieObj.genre_ids[0]]==this.state.currGenre)
   
     this.setState({

      movie:[...temp],
      movie2:[...temp],

     })
  }

  }

  handleCurrText=(inputValue)=>{

    this.setState({
      currText:inputValue
    },this.searchMovies)
  }

  searchMovies=()=>{

    if(this.state.currText != "")
    {
      let filteredArr= this.state.movie2.filter((movieObj)=>{

        let title=movieObj.original_title.toLowerCase();
        return title.includes(this.state.currText.toLowerCase())
      })

      this.setState({
        movie:[...filteredArr]
      })
    }
    else{
      let data=JSON.parse(localStorage.getItem('movies-app') || '[]')
      this.setState({
        movie:[...this.state.movie2]
      })
    }
  }

  sortPopularityDesc=()=>{
    let temp=this.state.movie.map((movieObj)=>movieObj)
    temp.sort(function(objA,objB){
      return objB.popularity - objA.popularity
    })
    
    this.setState({
      movie:[...temp],
      movie2:[...temp]
    })
  }
  sortPopularityAssc=()=>{
    let temp=this.state.movie.map((movieObj)=>movieObj)
    temp.sort(function(objA,objB){
      return objA.popularity - objB.popularity
    })
    
    this.setState({
      movie:[...temp],
      movie2:[...temp]
    })
  }
  sortRatingAssc=()=>{
    let temp=this.state.movie.map((movieObj)=>movieObj)
    temp.sort(function(objA,objB){
      return objA.vote_average- objB.vote_average
    })
    
    this.setState({
      movie:[...temp],
      movie2:[...temp]
    })
  }
  sortRatingDesc=()=>{
    let temp=this.state.movie.map((movieObj)=>movieObj)
    temp.sort(function(objA,objB){
      return objB.vote_average - objA.vote_average
    })
    
    this.setState({
      movie:[...temp],
      movie2:[...temp]
    })
  }

  handleDelete=(movieObj)=>{
    // console.log(movieObj);
    let genreId={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"}
    let temp=JSON.parse(localStorage.getItem('movies-app') || '[]')
    temp=temp.filter((movieElement)=>movieElement.id !=movieObj.id)
    let tempArr=[]
    tempArr.push("all genres")
    temp.map((movieObj2)=>{

      if(!tempArr.includes(genreId[movieObj2.genre_ids[0]]))
      {
          tempArr.push(genreId[movieObj2.genre_ids[0]])
      }

    })

    this.setState({
      genres:[...tempArr],
      movie:[...temp],
      movie2:[...temp]
    })
    localStorage.setItem("movies-app",JSON.stringify(temp))
  }

  render() {
    // let movieArr = movies.results;
    let genreId={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"}
    
   
    
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <ul className="list-group genre-selector">

                {
                    this.state.genres.map((genre)=>(

                      this.state.currGenre==genre?(<li className="list-group-item active">{genre}</li>):(<li className="list-group-item " onClick={()=>{this.handleGenre(genre)}}>{genre}</li>)

                        

                    ))

                     
                }

            </ul>
          </div>

          <div className="col-9 fav-table">
            <div className="row">
              <input type="text" class="form-control col text-center" placeholder="Search" value={this.state.currText} onChange={(e)=>{this.handleCurrText(e.target.value)}}/>
              <input type="number" class="form-control col " />
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">
                    <i class="fa fa-sort-up" style={{margin:"0.2rem"}} onClick={this.sortPopularityDesc}></i>
                    popularity
                    <i class="fa fa-sort-down" style={{margin:"0.2rem"}} onClick={this.sortPopularityAssc}></i>
                  </th>
                  <th scope="col">
                        <i class="fa fa-sort-up" style={{margin:"0.2rem"}} onClick={this.sortRatingDesc}></i>
                        Rating
                        <i class="fa fa-sort-down" style={{margin:"0.2rem"}} onClick={this.sortRatingAssc}></i>
                  </th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
               
                 {
                    this.state.movie.map((movieEle)=>(
                        <tr>
                        <th scope="row"><img style={{width:"8rem",padding:"1rem"}} src={`https://image.tmdb.org/t/p/original/${movieEle.backdrop_path}`}/>{movieEle.title}</th>
                        <td >{genreId[movieEle.genre_ids[0]]}</td>
                        <td className="text-center">{movieEle.popularity}</td>
                        <td className="text-center">{movieEle.vote_average}</td>
                        <td className="text-center"><button type="button" class="btn btn-danger" onClick={()=>{this.handleDelete(movieEle)}}>Delete</button></td>
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
