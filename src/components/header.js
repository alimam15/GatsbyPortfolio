import React from "react"
import {Link} from "gatsby"

const Header = () =>(
    <header>
        <nav>
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/contact">contact</Link></li>
                <li><Link to="/page-2">Page 2</Link></li>
            </ul>
        </nav>
    </header>
)

export default Header