import "../Search/Search.css"
import React from "react";


const Search=(props)=>{

    






    return(
        <>
            <div>
                <input type="search" className='search-questions' placeholder="Search for questions..." value={props.search} onChange={(e) => props.setSearch(e.target.value)}></input>
                <button onClick={()=>props.searching()} className="search-btn">Search</button>    
            </div>
        </>
    )

}
export default Search