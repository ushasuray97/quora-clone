import React from 'react'
import QACard from "../QACard/QACard";
import Qlist from "../Qlist/Qlist";
import "../Home/Home.css";

const Home = (props)=>{


    


    return(
        <div>           
            <div className="mainpage">
            {props.search===('')?
            <QACard/>:
            <div className="searched-elem">
                <h3 className="h3">{props.searchedQues}</h3>
                <p className="p">{props.searchedAns}</p>
            </div>
           
            }            
            <Qlist title={"Question List"} />
            </div>
            {/* {props.setSearchedQues('')& props.setSearchedAns('')} */}
        </div>
         
    )

}

export default Home