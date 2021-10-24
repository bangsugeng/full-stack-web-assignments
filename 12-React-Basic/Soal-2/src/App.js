import { Component } from "react";
import data from "./dummy-data";
import MovieCard from "./MovieCard";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movieList: [],
      isLoading: false
    }
  }

  async fetchMovieList() {
    let response = await fetch("https://api.jikan.moe/v3/top/anime")
    let data = await response.json()
    this.setState({
      movieList: data.top
    })
  }

  componentDidMount() {
    this.fetchMovieList()
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.movieList !== this.state.movieList) {
      this.setState({
        isLoading: true
      })
    }
  }

  render() {
    let element;
    if(this.state.isLoading) {
      element = this.state.movieList.map(movieData => {
        return (
          <div className="col-12 col-lg-3 col-md-4 col-sm-6 my-3" key={movieData.mal_id}>
            <MovieCard movie={movieData}/>
          </div> 
        )
      })
    } else {
      element = <h2>Loading...</h2>
    }

    return (
      <div className="container my-5">
        <h1 className="text-center">Anime List</h1>
        <div className="container my-5">
          <div id="daftar-anime" className="row">
            {element}
          </div>
        </div>
      </div>
    );
  }
}

export default App;