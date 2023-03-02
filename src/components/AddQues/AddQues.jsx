import React from "react";
import "./AddQues.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const AddQues=(props)=>{
 
    const navigate=useNavigate();

    const [Ques,setQues]=useState('');
    
  
    //    console.log(localStorage.getItem("questionObj"));
  

       var i=props.count;
     
    const ques_posted = () => {

        if(!Ques==''){

        var arryList=props.questionObj;
        arryList.unshift(Ques);
        props.setQuestionObj(arryList);

        localStorage.setItem(`QuestionList`,JSON.stringify(props.questionObj));
        i++;
        props.setCount(i) 

        navigate('/confirm');
        }
        else{
            alert("Please Enter Question")
        }

    };



    return(
        <div className="add_ques-div">
            <div className="ques-div">
                <h1 className="heading">Question:</h1>
                <input type="text" className="input-ques" placeholder="Type Your Question Here................" value={Ques} onChange={(e) => setQues(e.target.value)}></input>
            </div>
            <div className="button-style">
                <Button onClick={()=>navigate('/')} style={{width:"4rem", fontSize:"1rem"}}>
                    <span>Cancel</span>
                </Button>
                <Button onClick={()=>ques_posted()} style={{fontSize:"1rem"}} >
                    <span>Add Question</span>
                </Button>
            </div>
        </div>

    )
}
export default AddQues