import React from "react"
import {Link} from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () =>(
    <header className={headerStyles.header}>
        <h1><Link className={headerStyles.title} to ="/">ALIMAM MA</Link></h1>
        <nav>
            <ul className={headerStyles.navList}>
                <li><Link className = {headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">home</Link></li>
                <li><Link className = {headerStyles.navItem} activeClassName={headerStyles.activeNavItem}to="/about">about</Link></li>
                <li><Link className = {headerStyles.navItem} activeClassName={headerStyles.activeNavItem}to="/contact">contact</Link></li>
            </ul>
        </nav>
    </header>
)

export default Header