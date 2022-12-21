import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import Joi from "joi";
//import firebase from "firebase";
//import {addDoc,collection} from "@firebase/firestore";

export default function Register() {
  // const messagesRef =useRef();
  // const ref=collection(firebase, "messages");
  let [loading, setLoading] = useState(false);

  let [user, setUser] = useState({
    email: "",
    password: "",
    returnSecureToken: true,
  });

  let navigate = useNavigate();
  function goToLogin() {
    let path = "/login";
    navigate(path);
  }

  let submit = async (e) => {
    e.preventDefault();
    //let validateResult = validateForm();
    // console.log(validateResult)

    //let newUser = {email:user.email, password: user.password, }

    console.log(user);
    setLoading(true);

    let data = await axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBZdCKiiYVIpvBc_3oEziG03bVq5Oa2M2c",
      user
    );
    //

    console.log(data);
    if (data.status == 200) {
      console.log("success");
      goToLogin();
    }
  };

  function getFormValue(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
    console.log(myUser);
  }

  //   function validateForm(){
  //  const schema=Joi.object({
  //   name:Joi.string().min(2).max(20).required(),
  //    age:Joi.integer().min(11).max(70),
  //   //email:Joi.string().required().email(),
  //   password:Joi.string().required().password
  //  });
  //  return schema.validate(user);
  //   }

  return (
    <form onSubmit={submit}>
      <div className="form-group my-3">
        <label htmlFor="name">Name</label>
        <input
          onChange={getFormValue}
          placeholder="name"
          type="text"
          name="name"
          id="name"
          min="2"
          max="22"
          className="form-control"
        />
      </div>

      {/* <div className="form-group my-3">
        <label htmlFor="last-name">Last Name</label>
        <input
          placeholder="last name"
          type="text"
          onChange={getFormValue}
          name="last_name"
          id="last-name"
          className="form-control"
        />
      </div> */}

      <div className="form-group mt-3">
        <label htmlFor="age">Age</label>
        <input
          placeholder="age"
          type="number"
          name="age"
          id="age"
          min="10"
          max="70"
          onChange={getFormValue}
          className="form-control"
        />
      </div>

      <div className="form-group mt-3">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          name="email"
          required
          onChange={getFormValue}
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>

      <div className="form-group mt-1">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          name="password"
          required
          onChange={getFormValue}
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
          {loading ? "Wait plz!" : "Register"}
        </button>
      </div>
    </form>
  );
}
