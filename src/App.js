import Home from "./Component/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import TvShow from "./Component/TvShow/TvShow";
import Register from "./Component/Register/Register";
import NotFound from "./Component/NotFound/NotFound";
import Movies from "./Component/Movies/Movies";
import Login from "./Component/Login/Login";
import About from "./Component/About/About";
import People from "./Component/People/People";
import Logout from "./Component/Logout/Logout";
import { Route, Routes } from "react-router-dom";
import jwtDecode from "jwt-decode";
import ProtectedRoutes from "./Component/ProtectedRoutes/ProtectedRoutes";
import "./App.css";
import { useState,useEffect } from "react";

function App() {
  let [loginData, setLoginData] = useState(null);

  function setUserDate() {
    let idToken= localStorage.getItem("idToken");
    let decoded = jwtDecode(idToken);
     console.log(decoded);
     console.log("hjghjhj");
    setLoginData(decoded);
   
    console.log(loginData);
  }
//   useEffect(  ()=>{
// if(localStorage.getItem("idToken")){
//   setUserDate();
// }
//   },[]

//   )
  return (
    <div className="">
      <Navbar loginData={loginData}/>
      <div className="container">
        <Routes>
          {/* <Route element={<ProtectedRoutes loginData={loginData}/>}> 
</Route> */}

          <Route path="home" element={<Home />}></Route>

          <Route path="about" element={<About />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="tvshow" element={<TvShow />}></Route>
          <Route path="people" element={<People />}></Route>

          <Route
            path="login"
            element={<Login setUserData={setUserDate} />}
          ></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="logout" element={<Logout />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
