import React from "react";
import MovieCard from "./moviecard";


class MovieList extends React.Component {

  render() {
    // const{title,plot,poster,rating,price,star,fav,cart}=this.state;
    const { movies,onIncStar,onDecStar,onFav,onCart } = this.props;

    return (
      <>
        {/* <MovieCard title={title} plot={plot} poster={poster} rating={rating} star={star} price={price} fav={fav} cart={cart}/> */}
        {/* alternaate method  for more  data*/}

        {movies.map((movie, index) => {
          return (
            <MovieCard
              movies={movie}
              key={index}
              onIncStar={onIncStar}
              onDecStar={onDecStar}
              onFav={onFav}
              onCart={onCart}
            />
          );
        })}
      </>
    );
  }
}
export default MovieList;
