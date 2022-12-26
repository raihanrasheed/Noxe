import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import Details from "../Details/Details";
export default function Home() {
  let [trendingMovies, setTrendingMovies] = useState([]);
  let [trendingTv, setTrendingTv] = useState([]);
  let [trendingPerson, setTrendingPerson] = useState([]);
  let prefix = "https://image.tmdb.org/t/p/w500/";

  async function getTrendingMovies(mediaType, callback) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=daaa7ac93a90970c1df245f335372915`
    );
    callback(data);
    // setTrendingMovies(data);
    // setTrendingTv(data);
    // setTrendingPerson(data);
    console.log(data);
  }
let navigate =useNavigate();
 function goToDetails(id){
//alert(id);
 navigate(
  {
    pathname:'/details',
    search:`?id=${id}`,

  }
 )
 } 

  useEffect(() => {
    getTrendingMovies("movie", setTrendingMovies);
    getTrendingMovies("tv", setTrendingTv);
    getTrendingMovies("person", setTrendingPerson);
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-4 d-flex align-items-center">
          <div className={`w-44  mb-5$(styles.brdr)`}> </div>
          <div>
            <h1>Trending Movies</h1>
            <p>This is trending movies</p>
          </div>
        </div>
        {trendingMovies.length == 0
          ? "loadind"
          : trendingMovies.results.map((movie, idx) => (
              <div onClick={()=>goToDetails(movie.id)} className="col-md-4 my-3" key={idx}>
                <div className="text-center">
                  {<img src={prefix + movie.poster_path} className=" w-75" />}
                  <h3 className="mt-3">{movie.title} </h3>
                </div>
              </div>
            ))}
      </div>

      <div className="row">
        <div className="col-md-4 d-flex align-items-center">
          <div className={`w-44  mb-5$(styles.brdr)`}> </div>
          <div>
            <h1>Trending Tv</h1>
            <p>This is trending Tv</p>
          </div>
        </div>
        {trendingTv.length == 0
          ? "loadind"
          : trendingTv.results.map((tv, idx) => (
              <div className="col-md-4 my-3" key={idx}>
                <div className="text-center">
                  {<img src={prefix + tv.backdrop_path} className=" w-75" />}
                  <h3 className="mt-3">{tv.name} </h3>
                </div>
              </div>
            ))}
      </div>

      <div className="row">
        <div className="col-md-4 d-flex align-items-center">
          <div className={`w-44  mb-5$(styles.brdr)`}> </div>
          <div>
            <h1>Trending Person</h1>
            <p>This is trending person</p>
          </div>
        </div>
        {trendingPerson.length == 0
          ? "loadind"
          : trendingPerson.results.map((person, idx) => (
              <div className="col-md-4 my-3" key={idx}>
                <div className="text-center">
                  {<img src={prefix + person.profile_path} className=" w-75" />}
                  <h3 className="mt-3">{person.name} </h3>
                </div>
              </div>
            ))}
      </div>
    </>
  );
}
