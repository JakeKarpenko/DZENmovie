import React from "react";
import Logo from "./Logo";
import MenuIcon from '@mui/icons-material/Menu';

 function NavBar(){
     return(
        <ul className="nav-bar">
        <li style={{float: "left"}}><Logo/></li>
        </ul> 
     )
}

export default NavBar

