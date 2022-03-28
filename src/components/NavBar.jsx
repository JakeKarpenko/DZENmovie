import React from "react";
import Logo from "./Logo";

 function NavBar(){
     return(
         <nav>

          <ul className="nav-bar">
              <li style={{float: "left"}}> <Logo /> </li>
          </ul>
         </nav>
     )
}

export default NavBar