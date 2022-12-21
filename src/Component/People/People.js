import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

export default function People() {

let [trendingPerson, setTrendingPerson] = useState([]);
  let prefix = "https://image.tmdb.org/t/p/w500/";
  async function getApi() {
    let prefix = "https://image.tmdb.org/t/p/w500/";
    let { data } = await axios.get(
      "https://api.themoviedb.org/3/trending/person/day?api_key=daaa7ac93a90970c1df245f335372915"
    );
    console.log(data);
   
    setTrendingPerson(data);
  }

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div>



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

    </div>
  )
}
