import React from "react";
import styled from "styled-components";
import "./style.css";


const Main=styled.div`
background:#30264a;
color:white;
`
const Str=styled.img`background:transparent
`
function MovieCard(props){
    
    const {movies,onIncStar,onDecStar,onFav,onCart}=props;
    const{title,plot,poster,rating,price,stars,fav,Cart}=props.movies;

    return (
      <>
        <div className="main">
          {/* Movie Card */}
          <Main className="movie-card">
            {/* Left Section of moies card */}
            <div className="left">
              <img src={poster}
                alt="Poster"
              />
            </div>

            <div className="right">
              <div className="title">{title}</div>
              <div className="plot">{plot}</div>
              <div className="price">Rs. {price} </div>
            

            <div className="footer">
              <div className="rating">{rating}</div>

              <div className="star-dis">
                <Str className="str-btn"
              src="https://www.pngplay.com/wp-content/uploads/5/Minus-Symbol-PNG-Photo-Image.png"
                alt="dec" onClick={()=>onDecStar(props.movies)}
                />
                <Str className="stars"
src="https://th.bing.com/th/id/R.4a2d9af3315c5a2fed31a053d9036670?rik=%2foZ54NQJzp6siQ&riu=http%3a%2f%2fwww.freepngimg.com%2fdownload%2fstar%2f22-star-png-image.png&ehk=e%2fiV9DK0GfWXyF4tRiZUeskz0vCgpw5G2kJo6Nix1AY%3d&risl=&pid=ImgRaw&r=0"                 
 alt="Star"
                />
                <Str className="str-btn"
src="https://www.pngarts.com/files/3/Plus-Symbol-Transparent-Images.png"
                  // alt="inc" onClick={this.increaseStar.bind(this)}
                  alt="inc" onClick={()=>onIncStar(props.movies)}
                />
                <span className="starCount"> {stars}</span>
              </div>
              {/* {fav?<button className="unfavourite-btn" onClick={this.handleFav}>Un-Favourite</button>:
              <button className="favourite-btn" onClick={this.handleFav}>Favourite</button>} */}
              {/* {<button className={fav?"favourite-btn":"unfavourite-btn"} onClick={this.handleFav}>{fav?"Favourite":"Un-favourite"}</button>} */}


              {/* <button className="favourite-btn">Un-Favourite</button>
              <button className="favourite-btn">Favourite</button> */}
              {/* {<button className={cart?"cart-btn":"unfavourite-btn"}onClick={this.handleCart}>{cart?"Add to Cart":"Remove From Cart"}</button>} */}

              {/* {cart?<button className="cart-btn" onClick={this.handleCart}>Add to Cart</button>:
              <button className="cart-btn" onClick={this.handleCart}>Remove From Cart</button>} */}


              {fav ?<button className="unfavourite-btn" onClick={()=>onFav(movies)}>Un-favourite</button>:<button className="favourite-btn" onClick={()=>onFav(movies)}>Favourite</button>} 
                            {/* {/ {<button className={fav ?"unfavourite-btn":"favourite-btn"} onClick={()=>onFavbtn(this.props.movies)}>{fav?"unfavourite-btn":"favourite-btn"}</button>} /} */}
              {Cart ?<button className="unfavourite-btn" onClick={()=>onCart(movies)}>Remove From Cart</button>:<button className="cart-btn" onClick={()=>onCart(movies)}>Add To Cart</button>} 
              </div>
            </div>
          </Main>
        </div>
      </>
    );
  }

export default MovieCard;
