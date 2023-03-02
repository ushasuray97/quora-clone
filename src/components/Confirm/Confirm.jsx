import React from "react";
import Button from "../Button/Button";
import '../Confirm/Confirm.css'
import { useNavigate } from "react-router-dom";


const Confirm=(props)=>{
    const navigate=useNavigate();

    return(
        
        <div className="confirm-tag">
            <h1 className="h2-confirm">Your Post is Submitted
            <Button onClick={()=>navigate('/')} style={{fontSize:"1rem"}}><span>Back to home</span></Button>
            </h1>
            
        </div>
    )

}
export default Confirm