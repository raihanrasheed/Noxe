import React from 'react'
import People from '../People/People';

export default function Navbar({loginData}) {
  console.log("navbar",loginData)
  return (
    <div>


<nav className="navbar navbar-expand-lg navbar-light bg-light">
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
        <link className="nav-link" to="movies">Movies </link>
      </li>


      <li className="nav-item active">
        <link className="nav-link" to="tvshow">Tv Show </link>
      </li>


      <li className="nav-item active">
        <link className="nav-link" to="pepole">People </link>
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
</nav>








    </div>
  )
}
