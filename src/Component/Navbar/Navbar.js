import React from "react";
import People from "../People/People";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./navbar.css";
import { UserContext } from "../Login/Login";
import Logout from "./../Logout/Logout";

export default function Navbar({ isLoginUser, logout }) {
  console.log("navbar", isLoginUser);
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-black">
          <li className="nav-item active">
            <h2 className="navbarr">Noxis </h2>
          </li>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
          ></button>

          <div className="collapse navbar-collapse" id="navbarNav">
            {isLoginUser ? (
              <>
                <li className="nav-item">
                  <NavLink className="navbarr" to="home">
                    Home
                  </NavLink>
                </li>

                <li className="nav-item active">
                  <a className="navbarr" href="about">
                    About{" "}
                  </a>
                </li>

                <li className="nav-item active">
                  <a className="navbarr" href="movies">
                    Movies{" "}
                  </a>
                </li>

                <li className="nav-item active">
                  <a className="navbarr" href="tvshow">
                    Tv Show{" "}
                  </a>
                </li>

                <li className="nav-item ">
                  <a className="navbarr" href="people">
                    People{" "}
                  </a>
                </li>
              </>
            ) : (
              <></>
            )}

            {!isLoginUser ? (
              <>
                {" "}
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="navbarr" href="login">
                      Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="navbarr" href="register">
                      Register
                    </a>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <ul>
                  <li className="nav-item">
                    <a className="l" href="login" onClick={logout}>
                      Logout
                    </a>
                  </li>
                </ul>
              </>
            )}
          </div>
        </nav>

        {/* <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <a className="navbar-brand" href="#">Noxe</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
 
  <div className="collapse navbar-collapse" id="navbarNav">
     {loginData?  <>
    
      <li className="nav-item">
        <a className="nav-link " href="home">Home</a>
      </li>
     
      <li className="nav-item active">
        <a className="nav-link" href="about">About </a>
      </li>

      
      <li className="nav-item active">
        <Link className="nav-link" to="movies">Movies </Link>
      </li>


      <li className="nav-item active">
        <Link className="nav-link" to="tvshow">Tv Show </Link>
      </li>


      <li className="nav-item active">
        <Link className="nav-link" to="pepole">People </Link>
      </li>

   
    </>  :""}

    {!loginData ? 
    <>   <ul className="navbar-nav ms-auto">
       <li className="nav-item">
        <a className="nav-link " href="login">Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="register">Register</a>
      </li>
    </ul>
    </>
    
 :
 <>
  
  <li className="nav-item">
        <a className="nav-link disabled" href="logout">Logout</a>
      </li>
 
 </> 
  }
 
   

      
     
    
  </div>
</nav> */}
      </div>
    </>
  );
}
