import React from "react";
import NavBar from "./NavBar";
import WelcomePage from "./WelcomePage"
import MoviePage from "./MoviePage"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import tegs from "../tegs";


export default function App(){
    return(
        <BrowserRouter>
               <div>
                  <NavBar/>
                  <Routes>
                      <Route path="/" element={<WelcomePage />} />
                      {tegs.map( (teg, index) => <Route path={"/" + index}  key={index}dscs element={<MoviePage  key={index} id={index} title={teg}/>} /> )}
                  </Routes>
                  
            </div>
        </BrowserRouter>
    )
}