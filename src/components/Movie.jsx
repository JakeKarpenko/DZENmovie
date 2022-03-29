import React, { useEffect, useState } from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Axios from "axios";
import Logo from "./Logo"

function Movie(props){

    const [youTubeKey, setYouTubeKey] = useState("");
    const [isTrailerOpened, setIsTrailerOpend] = useState(false);

    useEffect( () => {
        Axios.get("https://api.themoviedb.org/3/movie/" +props.id + "/videos?api_key=dc920c69a4620ff1f85e5c988531da53").then(
             (responce) =>{
                 setYouTubeKey(responce.data.results[0].key);
                 console.log(responce.data.results[0].key);
             })
    },[])    

    return(
                  <div className="movie" key={props.index}> 
                    <img className="img-movie" src={"https://image.tmdb.org/t/p/original/" + props.poster} /> 
                    <div className="content fade">
                        <h2>{props.original_title}</h2>
                        <div className="scroll-overview">
                             <p className="overview">{props.overview}</p>
                        </div>
                        <div className="rating">
                         <p><i className="fa-solid fa-star star"></i> <span className="imdb">IMDB RATING</span> </p>
                            <span className="vote">{props.vote_average}</span><span style={{fontSize:"10px", opacity:"0.7"}}>/10</span>
                        </div>
                        
                        <div className="play-btn" onClick={ () => setIsTrailerOpend(true) }>
                          <PlayArrowIcon onClick={ () => setIsTrailerOpend(true) } style={{fontSize:"80px"}} className="play-logo"/>
                             <p>Trailer</p>
                        </div>                                         
                    </div>

                
                        {isTrailerOpened &&
                        <div onClick={ () => setIsTrailerOpend(false) } className="trailer-block">
                             <div className="logo-movie">
                            <Logo/>
                             </div>
                             <iframe className="trailer-video" width="560" height="315" src={"https://www.youtube.com/embed/" + youTubeKey + "?autoplay=1"}  title="YouTube video player"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                         }
                    </div>
    )
}

export default Movie