import React from 'react'
import './SideDrawer.css'
import { Link, NavLink } from 'react-router-dom'

const sideDrawer = props => {
    let DrawerClasses = 'side-drawer'
    if (props.show){
        DrawerClasses = 'side-drawer open'
    }
    return(
        <nav className={DrawerClasses}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Discover">Discover</Link></li>
                <li><Link to="/Users">Users</Link></li>
                <br/><br/>
                <li><Link to="/Signup">Sign Up</Link></li>
                <li><Link to="/Login">Login</Link></li>
            </ul>
        </nav>
    )
}
    
export default sideDrawer;