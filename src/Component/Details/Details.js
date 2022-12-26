import React from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';
export default function Details() {
    let [searchParams,setSearchParams] = useSearchParams();
    let [details,setDetails]=useState([]);
    let currentId= searchParams.get('id');
    let prefix = "https://image.tmdb.org/t/p/w500/";
 async function getDetails(){
    let {data}= await axios.get(`https://api.themoviedb.org/3/movie/${currentId}?api_key=daaa7ac93a90970c1df245f335372915`)
 setDetails(data);
 console.log(data);
 }
useEffect(
    ()=>{
getDetails();
    }
,[])

  return (
    <div className='row'>



      
       
              <div className="col-md-4 my-3" >
                <div className="text-center">
                  {<img src={prefix + details.poster_path} className=" w-75" />}
                  <h3 className="mt-3">{details.title} </h3>
                </div>
              </div> 
       

              <div className="col-md-4 my-3" >
                <div className="text-center">
             
                 <h3 className="mt-3">{details.  overview} </h3>
                 <h6> vote_average:{details.vote_average}</h6> 
                 <h6> vote_count:{details.vote_count}</h6>
                </div>
              </div> 




      </div>



  
     ) }
