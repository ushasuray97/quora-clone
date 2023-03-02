import React from "react";
import '../QACard/QACard.css';


const QACard = ()=>{
    let localQuesAnsList=[];
    
    let quesAns=[
        // {id:0,username:"Rahul",question:"what is the color of sky?",answer:"The color of sky blue because of ramen effect"},
        // {id:1,username:"Vishal",question:"When did the world war start?",answer:"The first world war started in 1914."},
        // {id:2,username:"Arjun",question:"When was India won the first World Cup?",answer:"The final of the 1983 Cricket World Cup was played between India and the West Indies at Lord's on 25 June 1983. "},
        
    ]
   
     localQuesAnsList=JSON.parse(localStorage.getItem('QuestionAnswer'));
    //  console.log(localQuesAnsList)

        return (
            <div className="qacard">
             { 

            
                localQuesAnsList && localQuesAnsList.map((e,index)=>
                <div className="inner-card" key={index}>
                        {/* <h2 className="h2">{data.username}</h2> */}
                        <h3 className="h3">{e.question}</h3>
                        <p className="p" >{e.answer}</p>
                </div>


            )
         
           
           }

            {
                
                quesAns && quesAns.map((data)=>
                   
                    <div className="inner-card" key={data.id}>
                        <h2 className="h2" >{data.username}</h2>
                       
                        <h3 className="h3" >{data.question}</h3>
                       
                        <p className="p"  >{data.answer}</p>
                       
                    </div>
                    
                )
            }

            </div>
        )

}
export default QACard