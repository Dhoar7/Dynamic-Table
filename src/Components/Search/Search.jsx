import React from "react";
import "./Search.css"


const Search = ({search})=>{

    const handleChange = (e)=>{
        search(e.target.value)
    }

    return(
        <div className="search">
        <label className="label">Search :</label>
        <input className="input" type="text" onChange={handleChange} placeholder="Search Content" />
        </div>
    )
}

export default Search;