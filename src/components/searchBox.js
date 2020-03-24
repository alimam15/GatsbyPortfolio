import React from "react"

const SearchBox = ({searchfield ,searchChange}) => {
    return(
        <div>
            <input type = "search" placeholder = "Search for a blog" onChange={searchChange}></input>
        </div>
    )
}

export default SearchBox