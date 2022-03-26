import React from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import tegs from "../tegs";
import {Link} from 'react-router-dom'

function TegCategory(){
    return(
        
        <div className="teg-border">
            {/* <p> <DragIndicatorIcon style={{fontSize:"70px", fill:"white"}} /></p> */}
            <div>
            {tegs.map( (teg, index) => <Link key={index} to={"/" + index}> <button className="btn-tag"><span>{teg}</span></button> </Link>)}
            </div>
        </div>
    )
}

export default TegCategory
