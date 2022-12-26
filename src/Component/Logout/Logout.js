import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import Navbar from "./../Navbar/Navbar";
export default function Logout({ isLogInUser }) {
  // let [isLogInUser,setIsLogInUser]=(false);

  function makeLogOut() {
    // setIsLogInUser(null);
    localStorage.removeItem("idToken");
    goToLogin();
    let path = "/login";
  }

  useEffect(() => {
    makeLogOut();
  }, []);

  // let [msgError,setMsgError]=useState("");
  let navegate = useNavigate();
  function goToLogin() {
    let path = "/login";
    navegate(path);
  }

  // function goToTv() {
  //   let path = "/tvshow";
  //   navegate(path);
  // }

  // let [loginData,setLoginData] = useState(false);
  // let [user, setUser] = useState({
  //   email: "",
  //   password: "",
  //   returnSecureToken: true
  // });

  // let submit = async (e) => {
  //   e.preventDefault();
  //   console.log(user);
  //   let data = await axios.post(
  //     "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBZdCKiiYVIpvBc_3oEziG03bVq5Oa2M2c",
  //     user
  //   );

  //   if (data.message == 200|| data.status==200) {
  //   //  setUserData(true);
  //     //console.log(data);
  //     console.log("success");
  //    // goToTv();
  //  setLoginData(true);
  //    localStorage.setItem("idToken",data.data.idToken);
  //    console.log(data);
  //    console.log(data.data.idToken)
  //     goToHome();
  //   }
  //   else{
  //     setMsgError(data.message);
  //     console.log(data);

  //   }
  // };

  //   function getFormValue(e) {
  //     let myUser = { ...user };
  //     myUser[e.target.name] = e.target.value;
  //     setUser(myUser);
  //     console.log(myUser);
  //

  return (
    <>
      <form>
        <div className="form-group mt-3">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            name="email"
            // onChange={getFormValue}
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group mt-1">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            name="password"
            //  onChange={getFormValue}
            className="form-control"
            id="Password"
            placeholder="Password"
          />
        </div>

        {/* <div className="form-check my-3">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div> */}

        <div className="form-check mt-5">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </>
  );
}