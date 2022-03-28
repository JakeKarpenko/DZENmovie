import React from "react";
import TagCategory from "./TegCategory"


function WelcomePage(){

    return (
      
        <div className="welcome-page">
           <div className="text-zone">
             <p className="title">Click and Chill Out</p>
             <p className="subtitle">Chose teg or category of movie you would like to watch.</p>
            <TagCategory />
             <p className="subtitle">With our service you can find a movie according to your mood,  with the special tags. Find movie to inspirate and motivate yourself. Find movie to relax and cheel. Find movie to get adrenalin.</p>       
          </div>
        </div>
    )
}
export default WelcomePage