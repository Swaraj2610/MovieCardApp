import React from "react";
import styled from "styled-components";


const Nav=styled.div`
position: sticky;
top: 0;
position: -webkit-sticky;
background:#30264a;
color:white;
display:flex;
justify-content:space-between;
z-index:500;
`
const Zero=styled.span`
color: red;
background-color: yellow;
width:22px;
height:22px;
text-align:center;
border-radius:50%;
margin-top:-10px;
margin-left:-22px;
`
class Navbar extends React.Component {

  
  
    render() { 
      
      
      return(<>
        <Nav>
          <h1>Prime App</h1>
          <form className="form-inline my-2 my-lg-0">
          <input className="form-control mx-2 mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button type="button" className="btn btn-dark">Submit</button>
          <img className="imagestyle mx-4 " style={{ width:"20px",}}src="https://th.bing.com/th/id/R.a71659b653f6f35ade9bd815ab330ece?rik=yQF37y07bgv6HQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_359215.png&ehk=WaWZhe8lcpd9eFD%2bV8lnmaC0QobBB5nFpl3ORv3WIxw%3d&risl=&pid=ImgRaw&r=0&w=20&h=20 " alt="Cart" />
          <Zero style={{ textAlign:"centre"}}>{this.props.cardCount}</Zero>
        </form>
        </Nav>
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light nav">
      <a className="navbar-brand" href="/">Prime Videos</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">About</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link enabled" href="/">Favourite</a>
          </li> */}
        {/* </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mx-2 mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success " type="submit">Search</button>
          <img className="imagestyle mx-4 " style={{ width:"25px"}}src="https://th.bing.com/th/id/R.a71659b653f6f35ade9bd815ab330ece?rik=yQF37y07bgv6HQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_359215.png&ehk=WaWZhe8lcpd9eFD%2bV8lnmaC0QobBB5nFpl3ORv3WIxw%3d&risl=&pid=ImgRaw&r=0&w=20&h=20 " alt="Cart" />
        </form>
       <span style={{color: "red" , backgroundColor: "yellow",width:'22px',height:"24px",textAlign:"center",borderRadius:"50%",marginTop:"-20px", marginLeft:"-27px"}}>0</span>

      </div>
    </nav> */} 
    </>
    )}
}



export default Navbar;