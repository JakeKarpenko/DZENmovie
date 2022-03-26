import React, { useEffect, useState } from "react";
import {tegsData, genres} from "../tegs";
import Axios from "axios";


//https://api.themoviedb.org/3/search/movie?api_key=dc920c69a4620ff1f85e5c988531da53&query=MovieName find movie by movie name
//https://api.themoviedb.org/3/movie/popular?api_key=dc920c69a4620ff1f85e5c988531da53&language=en-US&page=2 popuarity



function MoviePage(props){
 
    const [currentMovie, setCurrentMovie] = useState([]);
    const [trailerLinkes, settrailerLinkes] = useState([]);

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

    useEffect( () => {
        currentMovie.map( (movie) =>{
            Axios.get("http://api.themoviedb.org/3/movie/" + movie.id +"/videos?api_key=dc920c69a4620ff1f85e5c988531da53").then(
                 (responce) =>{
                     settrailerLinkes( (prevValue) =>[
                         ...prevValue,
                         responce.data.results[0].key
                     ])
                 })
        } )
    }, [props.id] )
    

    console.log(trailerLinkes);
    

    	return(
            <div className="movie-teg-page">
            <p className="btn-tag-movie">{props.title}</p>
            <div className="movie-page">
            {currentMovie.map( (movieData, index) => {
                return (
                    <div className="movie" key={index}> 
                    <img className="img-movie" src={"https://image.tmdb.org/t/p/original/" + movieData.poster_path} /> 
                    <div className="content fade">
                        <h2>{movieData.original_title}</h2>
                        <p className="overview">{movieData.overview}</p>
                        <div className="rating">
                         <p><i className="fa-solid fa-star star"></i> <span className="imdb">IMDB RATING</span> </p>
                            <span className="vote">{movieData.vote_average}</span><span style={{fontSize:"10px", opacity:"0.7"}}>/10</span>
                        </div>


                       
                    </div>

                    </div>
                    )
            }  )}
            </div>
            </div>
        )
}

export default MoviePage