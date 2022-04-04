import React, { useEffect, useState,useLayoutEffect } from "react";
import {tegsData, genres} from "../tegs";
import Axios from "axios";
import Movie from "./Movie";
import {Link} from 'react-router-dom'


//https://api.themoviedb.org/3/search/movie?api_key=dc920c69a4620ff1f85e5c988531da53&query=MovieName find movie by movie name
//https://api.themoviedb.org/3/movie/popular?api_key=dc920c69a4620ff1f85e5c988531da53&language=en-US&page=2 popuarity



function MoviePage(props){
 
    const [currentMovie, setCurrentMovie] = useState([]);
   


    useEffect( () => {
        tegsData[props.id].map( (movie, index) =>{
            Axios.get("https://api.themoviedb.org/3/search/movie?api_key=dc920c69a4620ff1f85e5c988531da53&query=" + movie).then(
                 (responce) =>{
                     setCurrentMovie( (prevValue) =>{
                         return[
                             ...prevValue,
                             responce.data.results[0]
                         ]
                     } );
                 })
        })
    },[props.id])

    	return(
            <div className="movie-teg-page">
            <p className="btn-tag-movie">{props.title}</p>
             <span style={{padding:"5px"}}><Link to={"/add-movie"}> Add movie</Link></span>
            <div className="movie-page">
            {currentMovie.map( (movieData, index) =>
             <Movie 
                id={movieData.id}
                key={index}
                index={index}
                poster={movieData.poster_path}
                original_title={movieData.original_title}
                overview={movieData.overview}
                vote_average={movieData.vote_average}
                />  
            )}
            </div>
            </div>
        )
}

export default MoviePage
