import React from "react";
import Logo from "./Logo";

 function NavBar(){
     return(
         <div className="nav-bar">
          <ul>
              <li style={{float: "left"}}> <Logo /> </li>
          </ul>
         </div>
     )
}

export default NavBar