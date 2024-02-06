import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../asserts/image/logo.jpg";

//  const LoggedinUser =() =>{
//     return false;
//  }

const Header = () => {
  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }

  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }

  const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <>
      <section className="fix_header">
        <div className="container">
          <div className="header">
            <div className="logo">
              <img
                src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/foodies-logo-design-template-44f1cac34d28b362c02fd8079e141ad6_screen.jpg?ts=1658385175"
                alt="logo"
              />
            </div>

            <div className="navlist">
              <ul>
                <li>
                  <Link to="/home">
                    {" "}
                    <i className="fa fa-home"></i>Home
                  </Link>
                </li>
                <li>
                  <Link to="/search">
                    {" "}
                    <i className="fa fa-search"></i>Search
                  </Link>
                </li>
                <li>
                  <Link to="/Offers">

                    <i className="fa fa-percent"></i>Offers
                  </Link>
                </li>
                {/* <li><Link to="/Help"><i className="fa fa-bandcamp"></i>Help</Link></li> */}
                <li>
                  <Link to="/Cart">

                    <i className="fa fa-shopping-cart"></i>Cart
                  </Link>
                </li>
                <li>
                  <Link to="/Sign-out">

                    <i className="fa fa-user"></i>Sign-out
                  </Link>
                </li>
                {/* {
      isLoggedin ? <button className="log btn btn-light" onClick={()=> setIsLoggedin(false)} > <i className="fa fa-user"></i>Sign-out</button>
      :<button  className=" log btn btn-light"  onClick={()=> setIsLoggedin(true)}><i className="fa fa-user"></i>Sign-in</button>
        } */}
              </ul>
            </div>
            <br />
            <div id="myNav" className="overlay">
              <a href="javascript:void(0)" className="closebtn" onClick={() => { closeNav() }}>&times;</a>
              <div className="overlay-content">
                <Link to="/home"> Home</Link>
                <Link to="/search"> Search </Link>
                <Link to="/Offers"> Offers  </Link>
                <Link to="/Cart"> Cart </Link>
              </div>


            </div>
            <span style={{ fontSize: "30px;cursor:pointer" }} onClick={() => { openNav() }}>&#9776;</span>
          </div>
        </div>
      </section>
    </>
  );
};
export default Header;
