import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
      
     
          <div className="collapse navbar-collapse bg-dark" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
                        <Link className="nav-link me-5 text-white" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link text-white  me-5" to="/login">Login</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link me-5 text-white" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link  me-5 text-white" to="/dashboard">Admin</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link me-5  text-white" to="/blogs">Blogs</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link  me-5 text-white" to="/contact">Contact Us</Link>
                    </li>
               
           
            </ul>
      
          </div>
    
      </nav>
    );
};

export default Navbar;