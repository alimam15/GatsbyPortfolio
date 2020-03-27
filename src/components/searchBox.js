import React from "react"
import searchBoxStyles from "./searchBox.module.scss"

const SearchBox = ({searchfield ,searchChange}) => {
    return(
                <div >
                <input type = "search"
                    placeholder="Search for a blog" 
                    onChange={searchChange}
                    className={searchBoxStyles.search}></input>
                </div>       
    )
}

export default SearchBox