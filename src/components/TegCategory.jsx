import React, { useEffect, useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import Axios from 'axios'
import {Link} from 'react-router-dom'

function TegCategory(){
    const [tegs, setTegs] = useState([])

    useEffect( () =>{
        Axios.get("http://localhost:3001/alltag").then( 
            (responce) =>{
               setTegs(responce.data)
        } )
    },[])
    return(
        
        <div className="teg-border">
            <div>
            {tegs.map( (teg, index) => <Link key={index} to={"/" + index}> <button className="btn-tag"><span>{teg.tegName}</span></button> </Link>)}
            </div>
        </div>
    )
}

export default TegCategory
