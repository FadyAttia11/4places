import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Toolbar.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar__logo"><Link to="/">4places</Link></div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Discover">Discover</Link></li>
                    <li><Link to="/Users">Users</Link></li>
                </ul>
            </div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
                <ul>
                    <li><Link to="/Signup">Sign Up</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                </ul>
            </div>
        </nav>
    </header>
)
export default toolbar