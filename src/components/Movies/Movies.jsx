// import React from 'react';
// import {useContext} from 'react';
// import style from "./Movies.module.css";
// import { MediaContext } from './../../MediaContext';

// export default function Movies() {

//   let baseImgUrl = "https://image.tmdb.org/t/p/original/";

//   const {TrendingMovies} = useContext(MediaContext)


//   return (
//   <>
//   {
//   TrendingMovies?
//   <div className="row my-5">
//     <div className="col-md-4 d-flex align-items-center ">
//       <div className="w-100">
//         <div className={`w-25 ${style.brdr} mb-3`}></div>
//         <h2>Trending</h2>
//         <h2>Movies</h2>
//         <h2>To watch now</h2>
//         <p className="secondColor mb-3">Most watched movies by day</p>
//         <div className={`w-100 ${style.brdr}`}></div>
//       </div>
//     </div>
//     {TrendingMovies.map((movie, index) => (
//       <div className="col-md-2 my-3" key={index}>
//         <div>
//           <img
//             className="w-100 mb-2"
//             src={baseImgUrl + movie.poster_path}
//             alt=""
//           />
//           <h5> {movie.title} </h5>
//         </div> 
//       </div>
//     ))}
//   </div>: ''
// }

  
   
  
//   </>
//   )
// }
