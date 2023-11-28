import React from "react";
import { movies } from "./moviedata";
import MovieList from "./movielist";
import Navbar from "./navbar";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: movies,
      countCard:0
    };
  }
  // this.increaseStar=this.increaseStar.bind(increaseStar);

  handleIncStar = (movie) => {
    let { movies } = this.state;
    let movieID = movies.indexOf(movie);
    if (movies[movieID].stars < 5) {
      movies[movieID].stars += 0.5;
    }
    // form1 setState  work as rerendering and change in state only and asynchronous
    //  last component is effective if we create bundule as follows

    this.setState({
      movies,
    });
  };

  handleDecStar = (movie) => {
    let { movies } = this.state;
    let movieID = movies.indexOf(movie);
    if (movies[movieID].stars > 0) {
      movies[movieID].stars -= 0.5;
    }

    //   // form 2 setState work as rerendering and change in stat
    //   //if we create a bundle as follows then it will add all the elements i.e 0.5+2+4+3
    //   // and then it will perform task either add or substract because it depend on prevoius state but rerender happens only one time
    this.setState({
      movies,
    });
  };

  handleFav = (movie) => {
    let { movies } = this.state;
    let movieId = movies.indexOf(movie);
    movies[movieId].fav = !movies[movieId].fav;
    this.setState({
      movies,
    });
  };

  handleCart = (movie) => {
    let { movies } = this.state;
    let movieId = movies.indexOf(movie);
    movies[movieId].Cart = !movies[movieId].Cart;

    if(movies[movieId].Cart){
      this.state.countCard+=1;
    }
    else{
      this.state.countCard-=1;
    }

    this.setState({
      movies
    });
  };
  render() {
    return (
      <>
        {/* <Btn1 />
        <Btn2 /> */}
        <Navbar cardCount={this.state.countCard}/>
        <MovieList 
        movies={this.state.movies}
        onIncStar={this.handleIncStar}
        onDecStar={this.handleDecStar}
        onFav={this.handleFav}
        onCart={this.handleCart}
        />
      </>
    );
  }
}

export default App;
