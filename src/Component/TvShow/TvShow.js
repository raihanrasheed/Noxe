import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
export default function TvShow() {
  let [trendingTv, setTrendingTv] = useState([]);
  let prefix = "https://image.tmdb.org/t/p/w500/";
  async function getApi() {
    let prefix = "https://image.tmdb.org/t/p/w500/";
    let { data } = await axios.get(
      "https://api.themoviedb.org/3/trending/tv/day?api_key=daaa7ac93a90970c1df245f335372915"
    );
    console.log(data);
    console.log(data.results[0].name);
    setTrendingTv(data);
  }

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div>
      {/* {
 trendingTv.results.map(
(tv,idx)=>(
  <div className="col-md-4 my-3" key={idx}>
    <div>

    <h4>
    {tv.name}
    </h4>  
    </div>
  </div>
)
 )}  */}

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
    </div>
  );
}
