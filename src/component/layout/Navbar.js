import React from 'react' 
import { Link } from 'react-router-dom';//import the necessary libraries and components to the compoenets.

const Navbar = () =>{ 
    return(
        //it returns the header or the navbar to the app components.
        <nav className="navbar navbar-expand-sm 
        navbar-dark bgColorNav mb-3 py-0">
            <div className="container">
                <Link to="/contact" className="navbar-brand"> 
                    <i className="fa fa-home"/>Home
                </Link>
                </div>
                <ul className="navbar-nav mr-auto"> 
                    <li className="nav-item navbar-brand">
                        <Link to="/contact/add" className="nav-link addContact">
                            <i className="fa fa-plus">Add</i>
                        </Link>
                    </li> 
                </ul>
            </nav>
    );
}

export default Navbar;