import React from "react";
import "../AnsQues/AnsQues.css"
import Qlist from "../Qlist/Qlist";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import {useState} from 'react';


const AnsQues=(props)=>{

    const navigate=useNavigate();

    const [ans,setAns]=useState('');

    const [element,setElement]=useState('');

    function print(e){
        

        setElement(e);

        navigate('/ans_ques');
      
    }

    var obj={};
  

    function answerSubmit(){

        if(!ans==''){

        obj.question=(element);
        obj.answer=(ans);


        var QuestioAnswerList=props.quesAns;
        QuestioAnswerList.unshift(obj);

        props.setQuesAns(QuestioAnswerList);
        // console.log(props.quesAns);

        localStorage.setItem(`QuestionAnswer`,JSON.stringify(props.quesAns));

        navigate('/confirm');
        }
        else {
            alert("Please Enter Answer")
        }

    }


    return (
        <div>
            <div className="ansques-div">
            <p className="selected-ques">{element}</p>
                <div className="answer-page">
                    
                    <Qlist print={print} title={"Selection List"}/>
                    <textarea type="text" className="ans-card" placeholder="Answer:" value={ans} onChange={(entered_ans) => setAns(entered_ans.target.value)}></textarea>
                </div>
                <div className="button-style-ans">
                    <Button onClick={()=>navigate('/')} style={{width:"4rem", fontSize:"1rem"}}>
                        <span>Cancel</span>
                    </Button>
                    <Button onClick={answerSubmit} style={{fontSize:"1rem"}} >
                        <span>Add Answer</span>
                    </Button>
                </div>
            </div>
        </div>

    )
}
export default AnsQues