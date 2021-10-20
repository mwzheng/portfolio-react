import React from 'react';

const NavBar = () => {
    return <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <div className='container-fluid m-1'>
            <a className="navbar-brand" href='/'>Mickey's Portfolio</a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                    <a className="nav-link" href="/">Home</a>
                    <a className="nav-link" href="/">Resume</a>
                    <a className="nav-link" href="/">Projects</a>
                </div>
            </div>
        </div>
    </nav>
}

export default NavBar;