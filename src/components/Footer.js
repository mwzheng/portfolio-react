import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
    const githubLink = 'https://github.com/mwzheng';

    return <footer className='navbar fixed-bottom bg-dark text-white'>
        <div className='container'>
            <p className='lead mx-auto my-0'>
                Copyright &copy; 2021&emsp;|&emsp;
                <i className='bi bi-github'> </i>
                <a href={githubLink} target='_blank' rel='noreferrer'>GitHub</a>&emsp;|&emsp;
                <Link to='/'>Home</Link>&emsp;|&emsp;
                <Link to='/resume'>Resume</Link>&emsp;|&emsp;
                <Link to='/projects' >Projects</Link>
            </p>
        </div>
    </footer>
}

export default Footer;