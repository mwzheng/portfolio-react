import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container-fluid m-1'>
            <a className='navbar-brand' href='/'>Mickey's Portfolio</a>

            <button className='navbar-toggler' type='button' data-bs-toggle='collapse'
                data-bs-target='#navMenu'>
                <span className='navbar-toggler-icon'></span>
            </button>

            <div className="collapse navbar-collapse" id="navMenu">
                <div className="navbar-nav ms-auto">
                    <Link className='nav-link' to='/'>Home</Link>
                    <Link className='nav-link' to='/resume'>Resume</Link>
                    <Link className='nav-link' to='/projects' >Projects</Link>
                </div>
            </div>
        </div>
    </nav>
}

export default NavBar;