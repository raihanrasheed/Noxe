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
import { Navigate, Route, Routes } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import ProtectedRoutes from "./Component/ProtectedRoutes/ProtectedRoutes";
import "./App.css";
import { useState, useEffect } from "react";
import Details from './Component/Details/Details';

function App() {
  let [isLoginUser, setisLoginUser] = useState(false);
  let [isLogoutUser, setIsLogoutUser] = useState(false);

  function setUserDate() {
    let idToken = localStorage.getItem("idToken");
    if (idToken) {
      let decoded = jwtDecode(idToken);
      console.log(decoded);
      setisLoginUser(true);
      console.log(Date.now())
       if(decoded.exp * 1000 <  Date.now()){
       // console.log('yessssssssss');
        setisLoginUser(false);
       }else
        { setisLoginUser(true)}
      }else {
        setisLoginUser(false)
      }

      console.log("hjghjhj");
      //setLoginData(decoded);

      //console.log(loginData);
    
  }
  useEffect(() => {
    if (localStorage.getItem("idToken")) {
      setUserDate();
      //setisLoginUser(true);
    }
  }, []);

  function goToLogin() {
    localStorage.removeItem("idToken");
   // setisLoginUser(null);
   setisLoginUser(false)
    Navigate("/login");
  }

  // let navigate=useNavigate();
  //  function goToLogin(){
  //   let path= '/login';
  //   navigate(path);
  // }

  return (
    <div className="">
      <Navbar isLoginUser={isLoginUser} logout={goToLogin} />
      <div className="container">
        <Routes>

          <Route element={<ProtectedRoutes loginData={isLoginUser} />}>
            
            <Route path="home" element={<Home />}></Route>
            <Route path="/" element={<Home />}></Route>
 </Route>

            <Route path="about" element={<About />}></Route>
            <Route path="movies" element={<Movies />}></Route>
            <Route path="tvshow" element={<TvShow />}></Route>
            <Route path="people" element={<People />}></Route>
            <Route path="details" element={<Details/>}></Route>
         
          <Route
            path="login"
            element={<Login setLoginData={setisLoginUser} />}
          ></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="login" element={<Logout />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;